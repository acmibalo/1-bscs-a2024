// scripts.js

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

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
