$(document).ready(function () {
        $(".my-car").slick({
            autoplay: true,
            dots: true,
            speed: 1000,
        });
    });


// Toggle menu visibility on mobile
document.getElementById('menu-btn').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.toggle('open');
});
