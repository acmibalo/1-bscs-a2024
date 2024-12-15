// First slideshow variables and initialization
let slideIndex1 = 1; // First slideshow index
let slideIndex2 = 1; // Second slideshow index

// Initialize both slideshows
showSlides(slideIndex1, "mySlides", "dot", "caption");
showSlides(slideIndex2, "mySlides2", "dot2", "caption2");

// Generic function to show slides
function showSlides(n, slideClass, dotClass, captionId) {
  let i;
  const slides = document.getElementsByClassName(slideClass);
  const dots = document.getElementsByClassName(dotClass);
  const captionText = document.getElementById(captionId);

  if (n > slides.length) {
    n = 1; // Loop back to the first slide
  }
  if (n < 1) {
    n = slides.length; // Loop to the last slide
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";

  if (captionText) {
    captionText.innerHTML = dots[n - 1].alt;
  }
}

// Manual navigation for slideshows
function plusSlides(n, slideClass, dotClass, captionId) {
  if (slideClass === "mySlides") {
    slideIndex1 += n;
    showSlides(slideIndex1, slideClass, dotClass, captionId);
  } else if (slideClass === "mySlides2") {
    slideIndex2 += n;
    showSlides(slideIndex2, slideClass, dotClass, captionId);
  }
}

// Direct navigation for slideshows
function currentSlide(n, slideClass, dotClass, captionId) {
  if (slideClass === "mySlides") {
    slideIndex1 = n;
    showSlides(slideIndex1, slideClass, dotClass, captionId);
  } else if (slideClass === "mySlides2") {
    slideIndex2 = n;
    showSlides(slideIndex2, slideClass, dotClass, captionId);
  }
}

// Automatic slideshow for first slideshow
function autoShowSlides(slideClass, dotClass, captionId) {
  slideIndex1++;
  showSlides(slideIndex1, slideClass, dotClass, captionId);
  setTimeout(() => autoShowSlides(slideClass, dotClass, captionId), 3000); // Change slide every 3 seconds
}

// Automatic slideshow for second slideshow
function autoShowSlides2(slideClass, dotClass, captionId) {
  slideIndex2++;
  showSlides(slideIndex2, slideClass, dotClass, captionId);
  setTimeout(() => autoShowSlides2(slideClass, dotClass, captionId), 3000); // Change slide every 3 seconds
}

// Start automatic slideshows
autoShowSlides("mySlides", "dot", "caption");
autoShowSlides2("mySlides2", "dot2", "caption2");

// Initialize the first slideshow container
document.querySelector('.slideshow-container').style.display = 'block';

// Other untouched code:
// First Slideshow Functionality
let slideIndex = 0; // Start with the first slide
autoShowSlides(); // Call the function to start the automatic slideshow

// Automatically cycle through slides for the first slideshow
function autoShowSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++; // Increment the slide index
  if (slideIndex > slides.length) {
    slideIndex = 1; // Reset to the first slide
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and highlight the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(autoShowSlides, 3000); // Change slide every 3 seconds
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
