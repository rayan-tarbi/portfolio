document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let index = 0; // Index de l'image active

    // Fonction pour mettre à jour la position du carrousel
    const updateCarousel = () => {
        container.style.transform = `translateX(-${index * 100}%)`;
    };

    // Bouton précédent
    prevButton.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length; // Boucle vers la dernière image
        updateCarousel();
    });

    // Bouton suivant
    nextButton.addEventListener("click", () => {
        index = (index + 1) % items.length; // Boucle vers la première image
        updateCarousel();
    });
});
