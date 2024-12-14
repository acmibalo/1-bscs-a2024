
		var typingEffect = new Typed(".typing",{
    strings: ["First year BSCS student.","Editor.","Future Software Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
	
		var typingEffect = new Typed(".typed",{
    strings: ["& Future Software Developer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
	frontDelay:1500
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("scroll-up-btn");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
    