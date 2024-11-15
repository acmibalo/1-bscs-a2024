window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 80) {
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.backdropFilter = "none";
    }
});

const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Toggle the 'active' class
    navbarToggle.classList.toggle('active');
});

window.addEventListener("load", function() {
    // Hide the loading spinner
    document.getElementById("loading").style.display = "none";
  
    // Show the content
    document.getElementById("main").style.display = "block";
  }); 


document.getElementById("button-start").addEventListener("click", function() {
    window.location.href = "album.html"; 
  });

  function openInNewTab() {
    window.open("https://en.wikipedia.org/wiki/List_of_horror_films_of_2024", "_blank");
  }