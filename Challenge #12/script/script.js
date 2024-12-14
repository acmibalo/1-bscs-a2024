// Toggle Dropdown
function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown-content');
  dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
}

// Accordion Panels
document.addEventListener('DOMContentLoaded', function () {
  var acc = document.getElementsByClassName('accordion');
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    });
  }
});

// Slideshow Gallery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

// Video Modal
function openVideo(videoUrl) {
  var videoModal = document.getElementById('videoModal');
  var videoContainer = videoModal.querySelector('.modal-content');
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
  var videoModal = document.getElementById('videoModal');
  videoModal.style.display = 'none';
  var video = videoModal.querySelector('video');
  if (video) {
    video.pause();
    video.src = '';
  }
}

function centerModal(modal) {
  var content = modal.querySelector('.modal-content');
  var windowHeight = window.innerHeight;
  var contentHeight = content.offsetHeight;
  var top = (windowHeight - contentHeight) / 2;
  content.style.marginTop = top + 'px';
}

// Ensuring modals are centered when the window is resized
window.addEventListener('resize', function () {
  var videoModal = document.getElementById('videoModal');
  if (videoModal.style.display === 'block') {
    centerModal(videoModal);
  }

  var contactModal = document.getElementById('contactModal');
  if (contactModal.style.display === 'block') {
    centerModal(contactModal);
  }
});

// Display contact form
document.addEventListener('DOMContentLoaded', function () {
  var contactLinks = document.querySelectorAll('[href="#contactModal"]');
  contactLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var contactModal = document.getElementById('contactModal');
      contactModal.style.display = 'block';
      centerModal(contactModal);
    });
  });
});

function closeContactModal() {
  var contactModal = document.getElementById('contactModal');
  contactModal.style.display = 'none';
}
