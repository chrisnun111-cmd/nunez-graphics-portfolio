document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const navCard = document.querySelector('.nav-card');
  if (!toggle || !navCard) return;

  function setOpen(isOpen) {
    navCard.classList.toggle('nav-open', isOpen);
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  toggle.addEventListener('click', () => {
    setOpen(!navCard.classList.contains('nav-open'));
  });

  navCard.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) setOpen(false);
  });
});
