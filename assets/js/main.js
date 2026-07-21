document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach((link) =>
      link.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach((link) => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });

  const filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.listing-card');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        cards.forEach((card) => {
          card.style.display =
            filter === 'all' || card.dataset.status === filter ? '' : 'none';
        });
      });
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      if (success) success.classList.add('visible');
      form.reset();
    });
  }
});
