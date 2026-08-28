document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.project-image');
  if (!images.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const img = document.createElement('img');
  overlay.appendChild(img);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.setAttribute('aria-label', 'Close');
  closeBtn.textContent = '×';

  document.body.appendChild(overlay);
  document.body.appendChild(closeBtn);

  function openLightbox(src, alt) {
    img.src = src;
    img.alt = alt;
    overlay.classList.add('active');
    closeBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    closeBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  images.forEach((image) => {
    image.addEventListener('click', () => openLightbox(image.src, image.alt));
  });

  overlay.addEventListener('click', closeLightbox);
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
