document.addEventListener('DOMContentLoaded', () => {  
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      
      // Reset form
      this.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
      }, 5000);
    });

    // Add animation to social links
    document.querySelectorAll('.social-link').forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1) translateY(-3px)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) translateY(0)';
      });
    });
  });