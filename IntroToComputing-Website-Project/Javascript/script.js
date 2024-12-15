const swiper = new Swiper('.wrapper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBulets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

document.getElementById('submitBtn').addEventListener('click', function () {
  var comment = document.getElementById('thoughtBox').value;
  if (comment.trim() !== "") {
    var thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.add('show');

    setTimeout(function () {
      thankYouMessage.classList.remove('show');
    }, 5000);

    document.getElementById('thoughtBox').value = "";
  } else {
    alert("Please write a comment before submitting.");
  }
});



