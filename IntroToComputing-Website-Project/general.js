function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
}

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}  

function scrollFunction2() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

window.onload = function() {
    typeWriter();
  };

var i = 0;
var txt = "Welcome to the World of Percy Jackson!";
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");
  
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
      } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
      }
}

