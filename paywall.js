/* HRT Daily — soft freemium gate (Lever B: 1 treatment free, unlock to add more).
   Standalone: include <script src="./paywall.js"></script> in app.html's <head>.
   Works at the data layer, so it survives any future app re-export.
   Note: this is a *soft* gate (client-side). It stops casual use beyond the
   free tier; a determined user could bypass it. Real enforcement = app stores. */
(function () {
  'use strict';
  var DATA_KEY = 'hrt-daily-v1';      // where the app stores treatments
  var PRO_KEY  = 'hrtd_pro';          // our unlock flag
  var FREE_LIMIT = 1;                 // treatments allowed before paywall
  var BUY_URL = 'https://payhip.com/b/1Rwq8';
  // sha-256 of the unlock code "HRTDAILY-LIFETIME" (compared case-insensitively)
  var CODE_HASH = '828fed0fa5d1d99ade3e149d856af6f546378ca0997bf465726ed071d9ffb6df';

  function isPro() { try { return localStorage.getItem(PRO_KEY) === '1'; } catch (e) { return false; } }
  var _setItem = localStorage.setItem.bind(localStorage);
  var _getItem = localStorage.getItem.bind(localStorage);
  var pending = null;

  function medCount(raw) { try { var d = JSON.parse(raw); return (d && Array.isArray(d.meds)) ? d.meds.length : 0; } catch (e) { return 0; } }

  // Intercept saves: block only a NEW treatment that would exceed the free limit.
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

  function el(tag, css, html) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (html != null) e.innerHTML = html; return e; }

  function showPaywall() {
    if (document.getElementById('hrtd-paywall')) return;
    var ov = el('div', 'position:fixed;inset:0;z-index:2147483647;background:rgba(18,35,59,0.55);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Karla,system-ui,-apple-system,sans-serif;');
    ov.id = 'hrtd-paywall';
    var card = el('div', 'background:#F6F9FC;max-width:420px;width:100%;border-radius:22px;padding:30px 26px;box-shadow:0 30px 80px rgba(30,58,84,0.35);text-align:center;max-height:92vh;overflow:auto;');
    card.innerHTML =
      '<div style="width:52px;height:52px;border-radius:15px;background:#3A6EA8;color:#fff;display:flex;align-items:center;justify-content:center;font-family:Newsreader,serif;font-weight:800;font-size:22px;margin:0 auto 16px;">HD</div>' +
      '<h2 style="font-family:Newsreader,serif;font-weight:800;font-size:25px;color:#22364F;margin:0 0 8px;line-height:1.2;">Unlock the full tracker</h2>' +
      '<p style="font-size:16px;color:#5A6B80;line-height:1.5;margin:0 0 20px;">You can track <b>one treatment free</b>. Unlock lifetime access to add all of your HRT — patches, pills, gels, pellets and more — so your whole routine lives in one private place.</p>' +
      '<a href="' + BUY_URL + '" target="_blank" rel="noopener" style="display:block;background:#3A6EA8;color:#fff;text-decoration:none;font-weight:700;font-size:17px;padding:15px;border-radius:14px;box-shadow:0 8px 22px rgba(58,110,168,0.3);">Get lifetime access · $19</a>' +
      '<p style="font-size:13px;color:#9DB0C2;margin:10px 0 20px;">One-time payment · yours for life · private &amp; offline</p>' +
      '<div style="border-top:1px solid #DCE7F2;padding-top:18px;text-align:left;">' +
        '<label style="font-size:13px;font-weight:700;color:#64788C;text-transform:uppercase;letter-spacing:0.04em;">Already purchased? Enter your code</label>' +
        '<input id="hrtd-code" type="text" autocomplete="off" placeholder="Your unlock code" style="width:100%;box-sizing:border-box;margin-top:8px;padding:13px 14px;border:1.5px solid #CBDBEC;border-radius:12px;font-size:16px;color:#22364F;background:#fff;">' +
        '<div id="hrtd-err" style="color:#C2410C;font-size:13px;margin-top:8px;display:none;">That code didn\'t match — check your welcome email and try again.</div>' +
        '<button id="hrtd-unlock" style="width:100%;margin-top:12px;border:none;background:#4F9E8C;color:#fff;font-weight:700;font-size:16px;padding:14px;border-radius:12px;cursor:pointer;">Unlock</button>' +
      '</div>' +
      '<button id="hrtd-later" style="margin-top:16px;border:none;background:none;color:#9DB0C2;font-size:14px;font-weight:600;cursor:pointer;text-decoration:underline;">Maybe later</button>';
    ov.appendChild(card);
    document.body.appendChild(ov);

    var input = card.querySelector('#hrtd-code');
    var err = card.querySelector('#hrtd-err');
    card.querySelector('#hrtd-unlock').addEventListener('click', async function () {
      var code = (input.value || '').trim().toUpperCase();
      if (!code) { input.focus(); return; }
      var ok = false;
      try { ok = (await sha256Hex(code)) === CODE_HASH; } catch (e) { ok = false; }
      if (ok) {
        try { _setItem(PRO_KEY, '1'); } catch (e) {}
        try { if (pending) _setItem(DATA_KEY, pending); } catch (e) {}
        location.reload();
      } else { err.style.display = 'block'; }
    });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') card.querySelector('#hrtd-unlock').click(); });
    // "Maybe later": discard the unsaved extra treatment so state stays honest.
    card.querySelector('#hrtd-later').addEventListener('click', function () { location.reload(); });
  }

  // Expose for manual use (e.g. a "have a code?" link): window.hrtdUnlock()
  window.hrtdUnlock = showPaywall;
})();
