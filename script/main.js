document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.text-link__item'); 
    const slides = document.querySelectorAll('.slide');

    let currentSlideIndex = 0; 

    function hideAllSlides() {
        slides.forEach(slide => {
            slide.classList.remove('active'); 
        });
    }

    function resetAllLinks() {
        links.forEach(link => link.classList.remove('active'));
    }

    
    function changeSlide(newSlideIndex) {
        if (newSlideIndex === currentSlideIndex) return; 
        hideAllSlides();

        slides[newSlideIndex].classList.add('active');
        
        currentSlideIndex = newSlideIndex;
    }

    links.forEach((link, index) => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            resetAllLinks(); 
            link.classList.add('active'); 

            changeSlide(index); 
        });
    });

    changeSlide(currentSlideIndex);
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;
