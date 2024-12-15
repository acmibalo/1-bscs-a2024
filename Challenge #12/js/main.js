const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});


const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");
const nightImage = document.querySelector(".night-img");
const morningImage = document.querySelector(".morning-img");
const toggle = document.querySelector(".toggle");

function switchTheme() {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
    morningImage.classList.add("hidden");
    nightImage.classList.remove("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
    morningImage.classList.remove("hidden");
    nightImage.classList.add("hidden");
  }
}


document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
   
    const tooltip = this.querySelector('.tooltip');
    tooltip.style.display = 'block'; 
    setTimeout(() => {
      tooltip.style.opacity = '1'; 
    }, 10); 
  });

  item.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.tooltip');
    tooltip.style.opacity = '0';
    setTimeout(() => {
      tooltip.style.display = 'none'; 
    }, 300); 
  });
});