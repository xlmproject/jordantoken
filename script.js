(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.topbar nav');
  menuButton?.addEventListener('click', () => {
    const isOpen = nav?.classList.toggle('open') ?? false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  const toast = document.querySelector('.toast');
  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy');
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        if (toast) {
          toast.textContent = 'Issuer address copied';
          toast.classList.add('show');
          window.setTimeout(() => toast.classList.remove('show'), 1800);
        }
      } catch {
        if (toast) {
          toast.textContent = 'Copy is not available in this browser';
          toast.classList.add('show');
          window.setTimeout(() => toast.classList.remove('show'), 1800);
        }
      }
    });
  });
})();
