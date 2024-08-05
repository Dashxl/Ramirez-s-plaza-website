let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.opacity = i === currentIndex ? '1' : '0';
    });

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 3000); // Cambia de imagen cada 3 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setTimeout(autoSlide, 3000); // Inicia el auto deslizamiento después de 3 segundos
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
