//hover effects for grid and flex items
document.querySelectorAll('.grid-item, .flex-item').forEach(item => {
    item.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#dee2e6';
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        this.style.transition = 'all 0.3s ease';
    });

    item.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#e9ecef';
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

//navigation handling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        window.open(href, '_blank');

        //visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// section entrance animations
document.querySelectorAll('.layout-example').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    setTimeout(() => {
        section.style.transition = 'all 0.5s ease';
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    }, 100 * index);
});
