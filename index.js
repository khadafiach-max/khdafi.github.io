// Scroll To Top
const scrollUp = document.getElementById('scrollUp');
window.addEventListener('scroll', () => {
  scrollUp.classList.toggle('active', window.scrollY > 500);
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 60);
  document.querySelectorAll('.nav-link').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const inView = section.offsetTop - 120 <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY;
      link.classList.toggle('active', inView);
    }
  });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => { hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); }));