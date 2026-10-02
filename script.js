'use strict';
// The single delivery configuration. Use a trusted HTTPS form service supporting JSON.
// Public Formspree endpoint; no private credentials. Set blank to disable submission.
const FORM_ENDPOINT = 'https://formspree.io/f/xdekroka';
const form = document.getElementById('introduction-form');
const statusBox = document.getElementById('form-status');
const homes = document.getElementById('homes');
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
document.documentElement.classList.add('js');
menu.hidden = false;
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('keydown', event => {
  if (event.key === 'Escape') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.focus(); }
});
document.querySelectorAll('a[href^="#"]').forEach(link => {
  if (link.dataset.dialog) return;
  link.addEventListener('click', () => {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.focus({preventScroll:true});
  });
});
if (typeof HTMLDialogElement !== 'undefined' && typeof HTMLDialogElement.prototype.showModal === 'function') {
  document.querySelectorAll('[data-dialog]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const dialog = document.getElementById(link.dataset.dialog);
      const source = document.querySelector(link.getAttribute('href'));
      dialog.querySelector('.dialog-body').replaceChildren(...Array.from(source.children).slice(1).map(node => node.cloneNode(true)));
      dialog.showModal();
    });
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  });
} else { document.documentElement.classList.remove('js'); menu.hidden = true; }
function scopeCheck() { document.getElementById('homes-note').hidden = homes.value !== 'more'; }
homes.addEventListener('change', scopeCheck);
form.querySelectorAll('input,select').forEach(field => field.addEventListener('input', () => field.removeAttribute('aria-invalid')));
function showStatus(message) { statusBox.textContent = message; statusBox.focus({preventScroll:true}); }
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (form.querySelector('[type="submit"]').disabled) return;
  statusBox.textContent = '';
  if (form.elements.website.value) { showStatus('Unable to process this enquiry. Please contact us by email.'); return; }
  const fields = Array.from(form.querySelectorAll('input:not([name="website"]),select'));
  fields.forEach(field => { if (field.type !== 'email' && field.tagName !== 'SELECT') field.value = field.value.trim(); });
  const invalid = fields.filter(field => !field.checkValidity());
  fields.forEach(field => field.setAttribute('aria-invalid', String(invalid.includes(field))));
  if (invalid.length) { showStatus('Please complete the required fields and enter a valid email address.'); invalid[0].focus(); invalid[0].reportValidity(); return; }
  scopeCheck();
  if (homes.value === 'more') { showStatus('Our current service is for care homes and groups with up to five homes. This enquiry has not been sent because your group is outside the current scope.'); return; }
  if (!FORM_ENDPOINT) { showStatus('Online submission is not connected yet. Nothing has been sent. Please use the email link beside this form; it opens your email app and you must send the email yourself.'); return; }
  let endpoint;
  try { endpoint = new URL(FORM_ENDPOINT); if (endpoint.protocol !== 'https:') throw new Error('HTTPS required'); }
  catch { showStatus('Enquiry delivery is not correctly configured. Nothing has been sent. Please use the email link.'); return; }
  const button = form.querySelector('[type="submit"]');
  button.disabled = true; button.textContent = 'Sending…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const payload = Object.fromEntries(new FormData(form));
    delete payload.website;
    payload._gotcha = '';
    payload._subject = 'HCL Commercial — care-home introduction enquiry';
    const response = await fetch(endpoint.href, {method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload),signal:controller.signal});
    if (!response.ok) throw new Error('Submission rejected');
    form.reset(); scopeCheck();
    showStatus('The enquiry service has accepted your request. A member of our team will be in touch.');
  } catch { showStatus('We could not confirm that your enquiry was received. Please contact us by email rather than submitting again.'); }
  finally { clearTimeout(timeout); button.disabled = false; button.textContent = 'Request an introduction →'; }
});
