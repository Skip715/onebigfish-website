// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Dropdown click toggle (works on all browsers/devices)
document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.dropdown-toggle');
  toggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.closest('.nav-dropdown');
      const menu = dropdown.querySelector('.dropdown-menu');
      const isOpen = menu.style.display === 'block';
      // Close all dropdowns first
      document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
      // Toggle this one
      menu.style.display = isOpen ? 'none' : 'block';
    });
  });
  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  });
});

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
