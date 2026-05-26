// Nav scroll
const nav = document.querySelector('.nav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20));
 
// Mobile menu
const burger = document.querySelector('.nav__burger');
const links  = document.querySelector('.nav__links');
if (burger && links) {
  burger.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}
 
// Active link
(function(){
  const cur = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a:not(.nav__cta)').forEach(a => {
    if (a.getAttribute('href') === cur) a.classList.add('active');
  });
})();
 
// Fade-up on scroll
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const obs = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  fadeEls.forEach((el, i) => { el.style.transitionDelay = `${(i % 5) * 90}ms`; obs.observe(el); });
}
 
// Contact form
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const btn = form.querySelector('[type=submit]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
  });
}