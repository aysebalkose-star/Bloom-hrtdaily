/* HRT Daily — soft freemium gate (pure quantity model).
   Free: the WHOLE app (Today, Calendar, Planner, Journal) for ONE treatment.
   Pro ($19): unlimited treatments.
   Standalone: include <script src="./paywall.js"></script> in app.html's <head>.
   Gates at the data layer only — the paywall shows when you try to save a
   SECOND treatment. Every section is free for the first treatment, so people
   see the calendar/journal working before they're asked to pay.
   Soft/client-side by design; real enforcement = app stores. */
(function () {
  'use strict';
  var DATA_KEY = 'hrt-daily-v1';
  var PRO_KEY  = 'hrtd_pro';
  var FREE_LIMIT = 1; // treatments allowed before unlocking
  var BUY_URL = 'https://payhip.com/b/1Rwq8';
  var CODE_HASH = '828fed0fa5d1d99ade3e149d856af6f546378ca0997bf465726ed071d9ffb6df'; // sha-256 of HRTDAILY-LIFETIME

  function isPro() { try { return localStorage.getItem(PRO_KEY) === '1'; } catch (e) { return false; } }
  var _setItem = localStorage.setItem.bind(localStorage);
  var _getItem = localStorage.getItem.bind(localStorage);
  var pending = null;

  function medCount(raw) { try { var d = JSON.parse(raw); return (d && Array.isArray(d.meds)) ? d.meds.length : 0; } catch (e) { return 0; } }

  /* 1) Data-layer gate: block saving a NEW treatment beyond the free limit. */
  localStorage.setItem = function (k, v) {
    if (k === DATA_KEY && !isPro()) {
      var nc = medCount(v), oc = medCount(_getItem(DATA_KEY));
      if (nc > FREE_LIMIT && nc > oc) { pending = v; showPaywall(); return; }
    }
    return _setItem(k, v);
  };

  async function sha256Hex(str) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }
  function el(tag, css) { var e = document.createElement(tag); if (css) e.style.cssText = css; return e; }

  /* 3) Persistent, visible "Unlock" button (shown until Pro). */
  function mountUnlockButton() {
    if (isPro() || document.getElementById('hrtd-unlockbtn')) return;
    if (!document.body) { document.addEventListener('DOMContentLoaded', mountUnlockButton); return; }
    var b = el('button', 'position:fixed;left:50%;bottom:86px;transform:translateX(-50%);z-index:50;border:none;background:#3A6EA8;color:#fff;font-family:Karla,system-ui,sans-serif;font-weight:700;font-size:14px;padding:11px 20px;border-radius:99px;box-shadow:0 8px 24px rgba(58,110,168,0.35);cursor:pointer;display:flex;align-items:center;gap:7px;');
    b.id = 'hrtd-unlockbtn';
    b.innerHTML = '<span style="font-size:13px;">✦</span> Unlock unlimited treatments';
    b.addEventListener('click', function () { showPaywall(); });
    document.body.appendChild(b);
  }

  function showPaywall() {
    if (document.getElementById('hrtd-paywall')) return;
    var ov = el('div', 'position:fixed;inset:0;z-index:2147483647;background:rgba(18,35,59,0.55);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Karla,system-ui,-apple-system,sans-serif;');
    ov.id = 'hrtd-paywall';
    var card = el('div', 'background:#F6F9FC;max-width:420px;width:100%;border-radius:22px;padding:30px 26px;box-shadow:0 30px 80px rgba(30,58,84,0.35);text-align:center;max-height:92vh;overflow:auto;');
    card.innerHTML =
      '<div style="width:52px;height:52px;border-radius:15px;background:#3A6EA8;color:#fff;display:flex;align-items:center;justify-content:center;font-family:Newsreader,serif;font-weight:800;font-size:22px;margin:0 auto 16px;">HD</div>' +
      '<h2 style="font-family:Newsreader,serif;font-weight:800;font-size:25px;color:#22364F;margin:0 0 10px;line-height:1.2;">Add unlimited treatments</h2>' +
      '<p style="font-size:16px;color:#5A6B80;line-height:1.5;margin:0 0 14px;">Your first treatment is free — calendar, planner and journal included. Unlock lifetime access to track as many as you need:</p>' +
      '<ul style="text-align:left;max-width:320px;margin:0 auto 18px;padding-left:0;list-style:none;font-size:15.5px;color:#33465C;line-height:1.5;">' +
        '<li style="margin:7px 0;">✓ <b>Unlimited treatments</b> — estrogen, progesterone, testosterone</li>' +
        '<li style="margin:7px 0;">✓ <b>Every type</b> — patches, pills, gels, pellets</li>' +
        '<li style="margin:7px 0;">✓ <b>All on one calendar</b>, each in its own colour</li>' +
        '<li style="margin:7px 0;">✓ <b>Yours for life</b> — one payment, no subscription</li>' +
      '</ul>' +
      '<a href="' + BUY_URL + '" target="_blank" rel="noopener" style="display:block;background:#3A6EA8;color:#fff;text-decoration:none;font-weight:700;font-size:17px;padding:15px;border-radius:14px;box-shadow:0 8px 22px rgba(58,110,168,0.3);">Get lifetime access · $19</a>' +
      '<p style="font-size:13px;color:#9DB0C2;margin:10px 0 18px;">One-time payment · yours for life · private &amp; offline</p>' +
      '<div style="border-top:1px solid #DCE7F2;padding-top:16px;text-align:left;">' +
        '<label style="font-size:13px;font-weight:700;color:#64788C;text-transform:uppercase;letter-spacing:0.04em;">Already purchased? Enter your code</label>' +
        '<input id="hrtd-code" type="text" autocomplete="off" placeholder="Your unlock code" style="width:100%;box-sizing:border-box;margin-top:8px;padding:13px 14px;border:1.5px solid #CBDBEC;border-radius:12px;font-size:16px;color:#22364F;background:#fff;">' +
        '<div id="hrtd-err" style="color:#C2410C;font-size:13px;margin-top:8px;display:none;">That code didn\'t match — check your welcome email and try again.</div>' +
        '<button id="hrtd-unlock" style="width:100%;margin-top:12px;border:none;background:#4F9E8C;color:#fff;font-weight:700;font-size:16px;padding:14px;border-radius:12px;cursor:pointer;">Unlock</button>' +
      '</div>' +
      '<button id="hrtd-later" style="margin-top:16px;border:none;background:none;color:#9DB0C2;font-size:14px;font-weight:600;cursor:pointer;text-decoration:underline;">Maybe later</button>';
    ov.appendChild(card);
    document.body.appendChild(ov);
    var input = card.querySelector('#hrtd-code'), err = card.querySelector('#hrtd-err');
    function close() { var p = pending; pending = null; if (p) location.reload(); else ov.remove(); }
    card.querySelector('#hrtd-unlock').addEventListener('click', async function () {
      var code = (input.value || '').trim().toUpperCase();
      if (!code) { input.focus(); return; }
      var ok = false; try { ok = (await sha256Hex(code)) === CODE_HASH; } catch (e) { ok = false; }
      if (ok) {
        try { _setItem(PRO_KEY, '1'); } catch (e) {}
        try { if (pending) _setItem(DATA_KEY, pending); } catch (e) {}
        location.reload();
      } else { err.style.display = 'block'; }
    });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') card.querySelector('#hrtd-unlock').click(); });
    card.querySelector('#hrtd-later').addEventListener('click', close);
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
  }

  mountUnlockButton();
  window.hrtdUnlock = showPaywall;
})();
