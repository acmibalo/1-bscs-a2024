// script.js

// Get elements
const showVideoButton = document.getElementById('showVideoButton');
const videoModal = document.getElementById('videoModal');
const closeButton = document.getElementById('closeButton');

// Show the modal when the button is clicked
showVideoButton.addEventListener('click', () => {
    videoModal.classList.remove('hidden');
});

// Hide the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    videoModal.classList.add('hidden');
});

// Optional: Close the modal when clicking outside the video box
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.add('hidden');
    }
});
