// Toggle dropdown for navigation menu
function toggleDropdown() {
    var dropdown = document.querySelector(".dropdown-content");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Modal functionality
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Accordion functionality
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Virtual tour video functionality
function openVideo(src) {
    var modal = document.getElementById("myModal");
    var modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = '<span class="close" onclick="closeModal()">&times;</span>';
    var video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    modalContent.appendChild(video);
    modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", closeModal);

// Slideshow functionality for gallery
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
