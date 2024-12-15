document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('[class*="section"]:not(footer)');
  const navLinks = document.querySelectorAll('.navlist a');

  const initializeTextStyles = (section) => {
    const paragraphs = section.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(20px)';
      p.style.transition = 'none';
    });
  };

  const animateText = (paragraphs) => {
    paragraphs.forEach((p, index) => {
      setTimeout(() => {
        p.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
      }, index * 100);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const paragraphs = section.querySelectorAll('p');

        if (entry.isIntersecting) {
          animateText(paragraphs);
        }
      });
    },
    { threshold: 0.1 }
  );

  const resetTextStyles = (section) => {
    const paragraphs = section.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(20px)';
    });
  };

  sections.forEach((section) => {
    initializeTextStyles(section);
    observer.observe(section);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        sections.forEach((section) => {
          if (section !== targetSection) {
            resetTextStyles(section);
          }
        });

        targetSection.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          const paragraphs = targetSection.querySelectorAll('p');
          animateText(paragraphs);
        }, 500);
      }
    });
  });
});
