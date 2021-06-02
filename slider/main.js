const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numbersOfSlides = slides.length;
var slideNumber = 0;

//nextBtn animation & icons animation

nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber++;

    if (slideNumber > (numbersOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

});

//prevBtn animation & icons animation

prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = (numbersOfSlides - 1);
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");

});