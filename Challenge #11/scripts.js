   function showSnackbar() {
      var snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
      }, 3000);
    }

    var slider = document.getElementById("myRange");
    var output = document.getElementById("rangeValue");
    slider.oninput = function () {
      output.innerHTML = this.value;
    }

    function toggleReadMore() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("readMoreBtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
      }
    }