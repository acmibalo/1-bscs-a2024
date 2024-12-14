// Get references to the button and the card
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Toggle the 'active' class
    navbarToggle.classList.toggle('active');
});

const showCardButton = document.getElementById("showCardButton");
const infoCard = document.getElementById("infoCard");
const closeCardButton = document.getElementById("closeCardButton");

// Show the card when the button is clicked
showCardButton.addEventListener("click", function() {
    infoCard.classList.remove("hidden");
});

// Close the card when the close button is clicked
closeCardButton.addEventListener("click", function() {
    infoCard.classList.add("hidden");
});