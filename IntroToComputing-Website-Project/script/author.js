const image = document.querySelector(".img-container");

function openMain(){
    window.location.href = "index.html";
}

const middleX = window.innerWidth / 2;
const middleY = window.innerHeight / 2;

image.style.setProperty("--positionX", (image.getBoundingClientRect().width / 4) + "px");
image.style.setProperty("--positionY", (image.getBoundingClientRect().height / 1.1) + "px");

document.addEventListener("mousemove", (e) => {
    const x_offset = e.clientX - middleX;
    const y_offset = e.clientY - middleY;

    image.style.setProperty("--x_shift", (x_offset*0.05) + "px");
    image.style.setProperty("--y_shift", (y_offset*0.05) + "px");

});
