const cursor = document.querySelector(".cursor");
const cursor_horiz = document.querySelector(".horizontal");
const cursor_vert = document.querySelector(".vertical");

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
    cursor_horiz.style.opacity = 1;
    cursor_vert.style.opacity = 1;
})
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
    cursor_horiz.style.opacity = 0;
    cursor_vert.style.opacity = 0;
})
window.addEventListener("mousemove", function (e) {
    
    const X = e.clientX;
    const Y = e.clientY;

    if(e.target.tagName === 'IMG'){
        cursor.classList.add('cursor-hover');
        cursor_horiz.classList.add('cross-hover');
        cursor_vert.classList.add('cross-hover');
    }
    else{
        cursor.classList.remove('cursor-hover');
        cursor_horiz.classList.remove('cross-hover');
        cursor_vert.classList.remove('cross-hover');
    }

    this.setTimeout(() => {
    cursor.style.left = (X+15) + 'px';
    cursor.style.top = Y + 'px';
    cursor_horiz.style.left = (X+21) + 'px';
    cursor_horiz.style.top = (Y+13) + 'px';
    cursor_vert.style.left = (X+28) + 'px';
    cursor_vert.style.top = (Y+6) + 'px';

    }, 100);
});