
// hide scroll down button on scroll
const scrollBtn = document.querySelector(".scroll-button");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        scrollBtn.classList.add("scroll--hidden");
    } else {
        scrollBtn.classList.remove("scroll--hidden");
    }
        
    lastScrollY = window.scrollY;
});

