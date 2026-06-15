// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form submission
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Message Sent! We\'ll be in touch.';
  btn.style.background = '#2d7a3a';
  btn.disabled = true;
  e.target.reset();
  setTimeout(() => {
    btn.textContent = 'Submit Form';
    btn.style.background = '';
    btn.disabled = false;
  }, 5000);
}

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(15,36,71,0.12)'
      : '0 2px 12px rgba(15,36,71,0.06)';
  }
});
