// madSounds js
const bodyId = document.body.id;
if (bodyId === 'madSounds') {
  console.log('Running madSounds script');

  document.addEventListener('DOMContentLoaded', function () {
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');

      if (menuToggle && mobileMenu) {
          menuToggle.addEventListener('click', function () {
              mobileMenu.classList.toggle('active');
          });
      } else {
          console.error('Menu elements not found on this page.');
      }
  });
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

// Add fade-out effect for navigation links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Stop immediate navigation
        const target = this.href; // Get the target link

        // Add the fade-out effect
        document.body.classList.add('fade-out');

        // Delay navigation to the new page
        setTimeout(() => {
            window.location.href = target;
        }, 500); // Match the CSS transition duration
    });
});
