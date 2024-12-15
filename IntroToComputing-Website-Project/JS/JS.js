// Initialize slide indices for both slideshows
let slideIndex1 = 1;
let slideIndex2 = 1;

// Initialize both slideshows
showSlides(slideIndex1, "mySlides1", "dot1");
showSlides(slideIndex2, "mySlides2", "dot2");

// Generic function to show slides
function showSlides(n, slideClass, dotClass) {
  let i;
  const slides = document.getElementsByClassName(slideClass);
  const dots = document.getElementsByClassName(dotClass);

  if (n > slides.length) {
    n = 1; // Loop back to the first slide
  }
  if (n < 1) {
    n = slides.length; // Loop to the last slide
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the corresponding dot
  slides[n - 1].style.display = "block";
  if (dots.length > 0) {
    dots[n - 1].className += " active";
  }

  // Update the slide index
  if (slideClass === "mySlides1") {
    slideIndex1 = n;
  } else if (slideClass === "mySlides2") {
    slideIndex2 = n;
  }
}

// Navigate slides manually
function plusSlides(n, slideClass, dotClass) {
  if (slideClass === "mySlides1") {
    showSlides(slideIndex1 + n, slideClass, dotClass);
  } else if (slideClass === "mySlides2") {
    showSlides(slideIndex2 + n, slideClass, dotClass);
  }
}

// Navigate directly to a specific slide
function currentSlide(n, slideClass, dotClass) {
  showSlides(n, slideClass, dotClass);
}
