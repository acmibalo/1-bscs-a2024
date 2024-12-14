window.addEventListener("DOMContentLoaded", (e) => {
    gsap.to('.images', {duration: 1, opacity: 1, stagger: .15});
    gsap.to('.marquee', {duration: 1, translateY: 0, delay: 1.4});
    gsap.to('.circle-text-container', {duration: 1, translateY: 0, delay: 1.4});
    gsap.to('.pic-container', {duration: 1, translateY: 0, delay: 1.4});
})
