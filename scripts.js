// Mobile menu toggle
function toggleMenu() {
  var menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
  }
}

// Dropdown toggle - runs immediately, no DOMContentLoaded needed
function initDropdowns() {
  var toggles = document.querySelectorAll('.dropdown-toggle');
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var menu = this.parentNode.querySelector('.dropdown-menu');
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
      } else {
        // Close all first
        var allMenus = document.querySelectorAll('.dropdown-menu');
        for (var j = 0; j < allMenus.length; j++) {
          allMenus[j].classList.remove('open');
        }
        menu.classList.add('open');
      }
    });
  }

  // Close when clicking anywhere else
  document.addEventListener('click', function() {
    var allMenus = document.querySelectorAll('.dropdown-menu');
    for (var j = 0; j < allMenus.length; j++) {
      allMenus[j].classList.remove('open');
    }
  });
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDropdowns);
} else {
  initDropdowns();
}

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  var btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Message Sent! We\'ll be in touch.';
  btn.style.background = '#2d7a3a';
  btn.disabled = true;
  e.target.reset();
  setTimeout(function() {
    btn.textContent = 'Submit Form';
    btn.style.background = '';
    btn.disabled = false;
  }, 5000);
}

// Navbar scroll shadow
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(15,36,71,0.12)'
      : '0 2px 12px rgba(15,36,71,0.06)';
  }
});
