const cursor_image = document.querySelector(".img-container");

function openMain(){
    window.location.href = "index.html";
}

window.addEventListener("mousemove", function (e) {
    
    if(e.target.tagName === "U"){
        cursor_image.style.transform = "scale(1)";
    }
    else{
        cursor_image.style.transform = "scale(0)";
    }

    cursor_image.animate({
        left: (e.clientX) + 'px',
        top: (e.clientY) + 'px'
    }, {duration: 400, fill: "forwards"});
});
