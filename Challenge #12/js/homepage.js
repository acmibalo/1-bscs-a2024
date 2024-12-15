document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navLinks.contains(event.target) || mobileMenu.contains(event.target);
      if (!isClickInside && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  
    
  
    // Add smooth scroll behavior for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });