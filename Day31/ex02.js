const slidesData = [
    {
        image: "https://picsum.photos/id/25/800/400",
        title: "Slide 1",
    },
    {
        image: "https://picsum.photos/id/27/800/400",
        title: "Slide 2",
    },
    {
        image: "https://picsum.photos/id/28/800/400",
        title: "Slide 3",
    },
    {
        image: "https://picsum.photos/id/29/800/400",
        title: "Slide 4",
    },
];

const slides = document.querySelector(".slides");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const dots = document.querySelector(".dots");

const slideLength = slidesData.length;
let currentIndex = 0;
for (let i = 0; i < slideLength; i++) {
    const slide = document.createElement("li");
    slide.classList.add("slide");
    slide.innerHTML = `
    <img src="${slidesData[i].image}" alt="${slidesData[i].title}">
    <h2 class="title">${slidesData[i].title}</h2>
  `;
    slides.appendChild(slide);
}

function showSlide(currentIndex) {
    const slideItems = document.querySelectorAll(".slide");
    slideItems.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
    updateDot();
}

function handleNextSlide() {
    currentIndex++;
    if (currentIndex >= slideLength) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function handlePrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slideLength - 1;
    }
    showSlide(currentIndex);
}

// Dots
for (let i = 0; i < slideLength; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = i;
    dots.appendChild(dot);
}

const dotItems = document.querySelectorAll(".dot");

function updateDot() {
    dotItems.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

dotItems.forEach((dot) => {
    dot.addEventListener("click", function () {
        currentIndex = Number(this.dataset.index);
        showSlide(currentIndex);
    });
});

btnNext.addEventListener("click", handleNextSlide);
btnPrev.addEventListener("click", handlePrevSlide);

setInterval(handleNextSlide, 3000);
showSlide(currentIndex);
