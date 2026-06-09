/* ============================================================
   MAJIME INTERNATIONAL EDUCATION PVT. LTD.
   script.js — Navigation, Year Auto-fill, WhatsApp Form
   ============================================================ */

// ── STICKY HEADER: add shadow class on scroll ──
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });
})();

// ── MOBILE MENU TOGGLE ──
(function () {
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('nav-links');
  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside the nav/toggle
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      closeMenu();
    }
  });
})();

// ── FOOTER YEAR AUTO-FILL ──
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// ── WHATSAPP INQUIRY FORM ──
function sendInquiry(event) {
  event.preventDefault();

  var name    = (document.getElementById('name')?.value    || '').trim();
  var phone   = (document.getElementById('phone')?.value   || '').trim();
  var service = (document.getElementById('service')?.value || '').trim();
  var message = (document.getElementById('message')?.value || '').trim();

  // Validation
  if (!name) {
    alert('Please enter your full name.');
    document.getElementById('name')?.focus();
    return false;
  }
  if (!phone) {
    alert('Please enter your phone number.');
    document.getElementById('phone')?.focus();
    return false;
  }
  if (!service) {
    alert('Please select the service you are interested in.');
    document.getElementById('service')?.focus();
    return false;
  }

  // Build WhatsApp message
  var lines = [
    'Hello Majime International Education,',
    '',
    'I would like to inquire about your services.',
    '',
    'Name: ' + name,
    'Phone: ' + phone,
    'Service: ' + service,
    'Message: ' + (message || 'Please contact me for counseling.'),
    '',
    'Thank you.'
  ];

  var text = encodeURIComponent(lines.join('\n'));
  window.open('https://wa.me/9779855084137?text=' + text, '_blank', 'noopener,noreferrer');
  return false;
}
