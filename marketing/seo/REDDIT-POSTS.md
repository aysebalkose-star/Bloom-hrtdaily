# Reddit posts — HRT Daily

Reddit can send real, warm traffic (people actively asking "how do you keep track of your HRT?") — but it is **ruthless about self-promotion**. A post that reads like an ad gets removed and can get you banned from the sub. Links are `nofollow`, so the value here is **referral traffic + topical relevance**, not raw SEO juice.

## Rules of the road (read first)
1. **Read each subreddit's rules** before posting — several ban app promotion outright, or only allow it on a specific day/thread.
2. **Build a little history first.** Comment helpfully for a week or two so your account isn't brand-new-with-one-promo-post.
3. **Lead with value, not the link.** The best pattern on strict subs: post a genuinely useful question/story with *no link*, then mention the app **in a comment only if someone asks** "what do you use?".
4. **One subreddit at a time, spaced out.** Don't cross-post the same thing to five subs in an hour.
5. **Be honest about being the maker.** "Full disclosure, I built this" earns goodwill; hiding it gets you flamed.
6. **Never use multiple accounts or fake replies.** Against Reddit TOS and obvious to mods.

**Good subreddits:** r/Menopause, r/Perimenopause, r/HRT, r/hysterectomy (HRT context), and for the maker angle r/SideProject, r/InternetIsBeautiful, r/webdev (Showoff Saturday), r/pwa.

---

## Post 1 — r/Menopause / r/Perimenopause (value-first, NO link in the post)
*Use this where app promo is restricted. Drop the link only in a reply if asked.*

**Title:** How do you all keep track of your HRT? I kept losing the plot with patch days

**Body:**
> I'm on estradiol patches (twice a week) plus progesterone, and honestly the hardest part hasn't been the HRT itself — it's *remembering*. Which patch day is it? Did I actually change it Monday or am I thinking of last week? And every three months at my review I'm trying to reconstruct how I've felt from memory.
>
> What's worked for you? Paper calendar, phone reminders, an app, a partner who nags you kindly? 😄
>
> I've started jotting a one-line note each day about sleep/mood/hot flushes too, and weirdly that's been the most useful bit — I can actually *see* whether things are improving instead of guessing.
>
> Curious what systems other people have landed on.

*(If someone replies "what do you use?": )*
> I ended up making a little tracker for myself because nothing simple existed — happy to share the link if that's allowed here, don't want to break any rules. It's free to try and there's no account/sign-up.

---

## Post 2 — r/Menopause (story + soft mention, where rules allow a link)
**Title:** The thing that finally stopped me second-guessing my HRT

**Body:**
> Small thing but it changed my week-to-week: I started tracking every dose and a one-line "how I feel" note. After about three weeks I could actually look back and go "oh, the night sweats really have eased" instead of relying on my (menopausal 🙃) memory. It also made my review appointment so much easier — I just showed my notes.
>
> I couldn't find anything that was both simple and private (most apps want an account and your email), so I ended up building my own: **HRT Daily** — it's a web app, works offline, and nothing leaves your phone. Free to track one treatment; there's a one-off unlock if you want the full thing. Not trying to spam — just genuinely think the "write one line a day" habit helps, whatever tool you use.
>
> Link's in my profile / happy to drop it in a comment if that's OK with the mods.

---

## Post 3 — r/SideProject / r/pwa / r/webdev (Showoff Saturday) — maker angle (link fine here)
**Title:** I built a private, offline menopause HRT tracker (PWA, no account, data stays on device)

**Body:**
> My partner kept losing track of patch days on HRT, and every tracker we found wanted an account and uploaded health data to a cloud. So I built **HRT Daily** — a PWA that stores everything in local storage, works fully offline, and has no backend at all.
>
> Stack: plain HTML/CSS/JS, service worker for offline + instant updates, localStorage for data. The interesting bits were (a) a soft client-side paywall (freemium: first treatment free, SHA-256-hashed unlock code for the rest) with no server, and (b) a network-first SW so updates land immediately without stale caches.
>
> Live: https://hrtdaily.com — feedback on the approach (especially the no-backend paywall) very welcome.

---

## Comment templates (drop the link naturally when someone asks)
**When someone asks how to track HRT:**
> I use HRT Daily (hrtdaily.com) — full disclosure, I made it. It's free to track your first treatment, no account, everything stays on your phone. The daily one-line journal is the part I'd recommend even if you use something else.

**When someone worries about privacy of health apps:**
> If privacy's the concern, look for something with no account and no cloud. I ended up building HRT Daily for exactly that reason — it's offline and stores everything locally, nothing gets uploaded.

---

## Cadence suggestion
- Week 1: comment helpfully in r/Menopause & r/Perimenopause (no links), build a little karma.
- Week 2: Post 3 in r/SideProject or r/pwa (maker-friendly, link OK).
- Week 3: Post 1 (value-first) in r/Perimenopause; share link only in replies.
- Week 4: Post 2 in r/Menopause **only if** their rules allow a link — otherwise keep it link-free and let people ask.
