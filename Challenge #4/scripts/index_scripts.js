document.addEventListener('DOMContentLoaded', function() {
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
