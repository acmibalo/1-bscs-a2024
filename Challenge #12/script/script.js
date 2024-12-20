// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Accordion Panels
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    }
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
    for (i = 0; dots.length && i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    if (dots.length) dots[slideIndex - 1].className += " active";
}

// Automatic slideshow
let autoSlideIndex = 0;
showAutoSlides();

function showAutoSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) { autoSlideIndex = 1 }
    slides[autoSlideIndex - 1].style.display = "block";
    setTimeout(showAutoSlides, 3000); // Change image every 3 seconds
}

// Open video in modal
function openVideo(videoUrl) {
    const videoModal = document.getElementById('videoModal');
    const videoContainer = videoModal.querySelector('.modal-content');
    videoContainer.innerHTML = `
        <span class="close" onclick="closeVideoModal()">&times;</span>
        <video controls autoplay width="600">
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    videoModal.style.display = 'block';
    centerModal(videoModal);
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'none';
    const video = videoModal.querySelector('video');
    if (video) {
        video.pause();
        video.src = '';
    }
}

function centerModal(modal) {
    const content = modal.querySelector('.modal-content');
    const windowHeight = window.innerHeight;
    const contentHeight = content.offsetHeight;
    const top = (windowHeight - contentHeight) / 2;
    content.style.marginTop = top + 'px';
}

// Ensuring modals are centered when the window is resized
window.addEventListener('resize', function () {
    const videoModal = document.getElementById('videoModal');
    if (videoModal.style.display === 'block') {
        centerModal(videoModal);
    }

    const contactModal = document.getElementById('contactModal');
    if (contactModal.style.display === 'block') {
        centerModal(contactModal);
    }
});

// Display contact form
document.addEventListener('DOMContentLoaded', function () {
    const contactLinks = document.querySelectorAll('[href="#contactModal"]');
    contactLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const contactModal = document.getElementById('contactModal');
            contactModal.style.display = 'block';
            centerModal(contactModal);
        });
    });
});

function closeContactModal() {
    const contactModal = document.getElementById('contactModal');
    contactModal.style.display = 'none';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
