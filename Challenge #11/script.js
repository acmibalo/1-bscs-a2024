// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.style.display = 'none');
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); 
}

function changeSlide(n) {
  slideIndex += n - 1;
  showSlides();
}

// Accordion
let acc = document.querySelectorAll('.accordion');
acc.forEach(button => button.addEventListener('click', function() {
  this.classList.toggle('active');
  let panel = this.nextElementSibling;
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}));
