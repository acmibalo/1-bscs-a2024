// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Open modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Open video in modal
function openVideo(videoSrc) {
    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('videoElement');
    videoElement.src = videoSrc;
    videoModal.style.display = 'block';
}

// Close video modal
function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('videoElement');
    videoElement.src = '';
    videoModal.style.display = 'none';
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const panel = accordion.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
