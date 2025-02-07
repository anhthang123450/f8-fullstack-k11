const imgSlides = document.querySelectorAll(".img-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let numSlide = 0;
let autoSlide;

function handlePrev() {
    numSlide--;
    if (numSlide < 0) {
        numSlide = 3;
    }
    slideShow(numSlide);
}

function handleNext() {
    numSlide++;
    if (numSlide > 3) {
        numSlide = 0;
    }
    slideShow(numSlide);
}

function slideShow(n) {
    imgSlides.forEach((img) => (img.style.display = "none"));
    imgSlides[n].style.display = "block";
}

function autoSlideShow() {
    autoSlide = setInterval(handleNext, 3000);
}

autoSlideShow();

slideShow(0);
next.addEventListener("click", handleNext);
prev.addEventListener("click", handlePrev);
