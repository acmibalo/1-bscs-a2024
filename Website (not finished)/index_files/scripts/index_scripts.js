document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu when clicking menu button
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('nav-active');
    });

    // Create and add close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '×';
    closeButton.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
    navLinks.prepend(closeButton);

    const searchBar = document.querySelector('.search-bar input');
    const gameCards = document.querySelectorAll('.game-card');
    
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        gameCards.forEach(card => {
            const title = card.querySelector('.game-title').textContent.toLowerCase();
            const description = card.querySelector('.game-description').textContent.toLowerCase();
            const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
            
            const isVisible = 
                title.includes(searchTerm) || 
                description.includes(searchTerm) || 
                tags.some(tag => tag.includes(searchTerm));
            
            card.parentElement.style.display = isVisible ? 'block' : 'none';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('nav-active');
        }
    });

    // Close menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    const gameLinks = document.querySelectorAll('.game-link');
    
    gameLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            const card = this.querySelector('.game-card');
            card.style.transform = 'scale(1.03)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        link.addEventListener('mouseout', function() {
            const card = this.querySelector('.game-card');
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });
});