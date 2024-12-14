const cursor = document.querySelector(".cursor");

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
})
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
})
window.addEventListener("mousemove", function (e) {
    
    const X = e.clientX;
    const Y = e.clientY;

    if(e.target.tagName === 'IMG'){
        cursor.classList.add('cursor-hover');
    }
    else{
        cursor.classList.remove('cursor-hover');
    }

    if(e.target.className === 'nav-link' || e.target.closest('.nav-button')){
        cursor.classList.add('cursor-hover-nav');
    }
    else{
        cursor.classList.remove('cursor-hover-nav');
    }

    cursor.animate({
        left: (X-3) + 'px',
        top: (Y-3) + 'px'
    }, {duration: 600, fill: "forwards"});
});