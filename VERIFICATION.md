# Verification — 2 October 2026

Passed static checks: JavaScript syntax, unique IDs, every anchor target, all local assets. Passed interaction checks in jsdom (DOM simulation, not visual browser testing):

- Mobile menu opens
- Navigation closes menu
- Navigation focuses target
- CTA focuses enquiry
- Empty required fields rejected
- Invalid email rejected
- More-than-five explanation visible
- Out-of-scope submission stopped
- Original unconfigured delivery never claims sending
- Honeypot stops submission
- No fetch/submission issued in the original unconfigured build
- No localStorage entries
- Legal links resolve to fallback content
- Every form field labelled
- No external asset services

## Unverified
Chromium was unavailable and its download failed. Visual mobile/desktop rendering, horizontal overflow, real-browser focus styling, native modal keyboard trapping/Escape and reduced-motion rendering have NOT been verified in a browser. Responsive breakpoints and focus/reduced-motion rules are implemented. No real enquiry was sent. Actual Formspree acceptance and notification delivery, production HTTPS and browser compatibility remain unverified. Owner confirmed direct mailbox receipt on 2 October 2026.

Redesign: HTML anchors/assets/IDs and JavaScript syntax passed. Browser tool could not open localhost (ERR_BLOCKED_BY_CLIENT); visual rendering is unverified. Image reconstructed from approved rendering; responsive HTML will differ by viewport.

## Formspree integration — 2 October 2026
Configured public endpoint xdekroka using existing vanilla-JavaScript fetch with JSON POST and Accept application/json. No additional SDK, tracking or dependency. Mocked fetch tests passed success/reset, rejection/preserved fields, network failure/preserved fields, blank-endpoint fallback, required/email validation, more-than-five blocking, honeypot, payload fields and button re-enabling. These tests made no real network submissions. Notification recipient, provider account activation, limits/spam settings and end-to-end email delivery remain to be checked. Privacy remains a conspicuous draft.

## Privacy notice update
Expanded notice includes controller/contact, collected data, purposes/proposed lawful basis, recipient categories, 12-month unsuccessful-enquiry retention, ongoing-retention criteria, rights/complaints, website storage and automated scope check. Static HTML IDs/anchors passed for index and standalone notice; mocked form tests still pass. Provider UK transfer arrangements and controller adoption remain outstanding; no compliance certification or automatic deletion implementation is claimed.
