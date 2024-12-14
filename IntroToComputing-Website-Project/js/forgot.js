document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forgotPasswordForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      // Hide any existing messages
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
      
      if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        return;
      }
      
      // Simulate API call
      setTimeout(() => {
        successMessage.style.display = 'block';
        form.reset();
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 3000);
      }, 1000);
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  });