const p3_image_text = document.querySelector("#p3-image-text");

document.addEventListener("mousemove", (e)=> {

    switch(e.target.id){
        case "img1":
            p3_image_text.innerText = "not liking this";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        case "img2":
            p3_image_text.innerText = "long shutter";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        case "img3":
            p3_image_text.innerText = "wow dress flow";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        case "img4":
            p3_image_text.innerText = "nice sun ray";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        case "img5":
            p3_image_text.innerText = "framing";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        case "img6":
            p3_image_text.innerText = "experimental";
            p3_image_text.style.transform = "scaleX(1)";
            break;
        default:
            p3_image_text.style.transform = "scaleX(0)";
    }

    console.log(e.target.id);

    p3_image_text.animate({
        left: (e.clientX + 20) + 'px',
        top: (e.clientY + 3) + 'px'
    }, {duration: 400, fill: "forwards"});
});
