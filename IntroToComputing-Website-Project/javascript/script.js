new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween:30,

  // Pagination dots
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    }

  }

});