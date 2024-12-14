const nav = document.querySelector('.nav');
const plus = document.querySelector('.plus');

var i = 0;

function show(){
    if(i%2 === 0){
        nav.style.transform = "translateY(0)";
        plus.style.transform = "rotate(.125turn)";
    }
    else{
        nav.style.transform = "translateY(250%)";
        plus.style.transform = "rotate(0)";
    }
    i++;
    console.log(i);
};