# HCL Commercial — static website

Built 1 October 2026. No deployment, DNS changes, account creation or paid services.

## Local preview
Run `python3 -m http.server 8000` from this folder, then open http://localhost:8000 . Opening index.html directly also displays the page; use a local server for form testing.

## Files and GitHub Pages
Upload index.html, privacy-policy.html, styles.css, script.js, .nojekyll and assets/ to the selected repository folder. All paths are relative and work on a GitHub Pages project path. Hosting activation and a custom-domain file are intentionally outside this build. Do not change mail DNS when connecting the website.

## Image and logo
The approved 2 October rendering is implemented with photographic hero, navy process band, gold line icons, roles cards and a warm enquiry area. assets/care-home-garden.webp is AI-generated illustrative photography reconstructed from the approved rendering. It is not a real client or location. The image is labelled accordingly. Original rendering typography and generated image are approximated in responsive HTML; not guaranteed pixel-identical on every viewport.

The small SVG heron is a provisional brand mark; confirm it before launch. No stock-image service, external font or tracking request is used.

## Form configuration
The sole endpoint setting is FORM_ENDPOINT at the top of script.js, configured to https://formspree.io/f/xdekroka. Valid in-scope submissions are sent as JSON via fetch (vanilla JavaScript/AJAX), without a CDN library or build step. Set the endpoint blank to disable submission. The email fallback opens the visitor's email application; it never sends automatically. The owner confirmed receipt of a direct Outlook email on 2 October 2026; website-to-inbox delivery has not been tested.

Before launch, verify in Formspree that this form is active and its notification recipient is barry@hclcommercial.co.uk. Check account allowance, spam settings and any domain restrictions. Review PRIVACY_LAUNCH_REVIEW.md and finalise the draft privacy notice before publishing. JSON POST uses Content-Type and Accept application/json. The email field supports replies to the visitor. Client honeypot is basic friction, not robust spam protection: enable provider-side rate limiting and spam controls. No private API keys belong in this static site. Test service acceptance and actual inbox delivery independently. A 2xx response does not prove email delivery.

Remove the draft business/privacy indicators only after the corresponding launch checks are complete. The form rejects more-than-five-home requests; these are outside the current service. No enquiries are stored in localStorage, and no analytics or tracking services are included.

## Launch checklist
- Verify barry@hclcommercial.co.uk can receive and reply; deliver a controlled test enquiry.
- Confirm Formspree notification recipient, activation, allowance, privacy terms and spam protection; perform a controlled end-to-end test after publishing.
- Complete business number, registered office/jurisdiction, introducer status and broker entity/regulatory disclosures from primary evidence; do not infer an FCA status.
- Substantiate “dedicated care home specialist” for the brokers introduced.
- Agree remuneration disclosure through the relevant compliance route; keep fixed-fee governance separate.
- Finalise controller contact, lawful basis, sharing process, retention, processor/provider list, overseas transfers if any, rights and complaints process; replace the draft notice.
- Confirm illustrative photography and provisional logo for launch.
- Remove draft indicators only once corresponding checks pass.
- Confirm final mobile/desktop layout, domain HTTPS and real form delivery after hosting.

## Scope
No client example, price comparison, guarantee, whole-market comparison, adequacy claim, paid governance offer or named individuals. No cookies, tracking scripts, external fonts, resident information or policy uploads.

## Verification
See VERIFICATION.md for checks performed and remaining limits.

## Redesign 2 October
Preview banner moved to footer disclosures. Formspree was connected on 2 October. No hosting or DNS changes.

## Privacy notice
The expanded enquiry notice is in the accessible privacy section/dialog and privacy-policy.html. It includes the owner-approved 12-month unsuccessful-enquiry retention rule. PRIVACY_LAUNCH_REVIEW.md records the proposed legitimate interests assessment, operational deletion actions and outstanding UK provider/transfer evidence. This is an enquiry notice, not a privacy notice for cold-email prospecting or fixed-fee governance.
