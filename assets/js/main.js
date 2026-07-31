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

  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let index = 0;
    let timer;

    const show = (i) => {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === index));
      dots.forEach((d, n) => d.classList.toggle('is-active', n === index));
    };

    const startTimer = () => {
      clearInterval(timer);
      timer = setInterval(() => show(index + 1), 6000);
    };

    carousel.querySelector('.carousel-prev').addEventListener('click', () => { show(index - 1); startTimer(); });
    carousel.querySelector('.carousel-next').addEventListener('click', () => { show(index + 1); startTimer(); });
    dots.forEach((d, n) => d.addEventListener('click', () => { show(n); startTimer(); }));

    startTimer();
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    const guides = {
      buyers: { label: "Buyer's Guide" },
      sellers: { label: "Seller's Guide" }
    };
    const guideParam = new URLSearchParams(window.location.search).get('guide');
    const guide = guides[guideParam] || null;

    const banner = document.querySelector('.form-guide-banner');
    const guideField = form.querySelector('input[name="guideRequested"]');
    const subjectField = form.querySelector('input[name="_subject"]');

    if (guide) {
      if (banner) {
        banner.textContent = 'Requesting: ' + guide.label + ' — fill out the form below and Taylor will email it to you shortly.';
        banner.classList.add('visible');
      }
      if (guideField) guideField.value = guide.label;
      if (subjectField) subjectField.value = 'New ' + guide.label + ' request - Taylor Campbell Realtor';
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      const error = document.querySelector('.form-error');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (error) error.classList.remove('visible');
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then((res) => {
          if (!res.ok) throw new Error('Form submission failed');
          if (success) success.classList.add('visible');
          form.reset();
        })
        .catch(() => {
          if (error) error.classList.add('visible');
        })
        .finally(() => {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
});
