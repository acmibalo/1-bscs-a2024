// Lightbox Functionality
const screenshots = document.querySelectorAll('.game-screenshot');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// When a screenshot is clicked, show it in the lightbox
screenshots.forEach((screenshot) => {
    screenshot.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Show the lightbox
        lightboxImg.src = screenshot.src; // Set the clicked image to the lightbox
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Hide the lightbox
});

// Navigation Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Carousel Functionality
const carousels = document.querySelectorAll('.carousel'); // Select all carousels

carousels.forEach((carousel) => {
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carouselInner.querySelectorAll('.carousel-item');
    const leftArrow = carousel.querySelector('.left-arrow');
    const rightArrow = carousel.querySelector('.right-arrow');
    
    let currentIndex = 0;

    // Function to update the carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100; // Calculate translate offset
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Event listeners for arrows
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Ensure hover effects work regardless of carousel functionality
    items.forEach(item => {
        item.addEventListener('mouseover', () => item.classList.add('hover'));
        item.addEventListener('mouseout', () => item.classList.remove('hover'));
    });
});
