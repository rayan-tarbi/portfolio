document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0;

    const updateCarousel = () => {
        container.style.transform = `translateX(-${index * 100}%)`;
    };

    prevButton.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        index = (index + 1) % items.length; 
        updateCarousel();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const profileImage = document.querySelector(".about-photo");
    const aboutInfo = document.querySelector(".about-info");

    profileImage.addEventListener("click", () => {
        aboutInfo.classList.toggle("visible");
    });
});
