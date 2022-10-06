(function () {
    const caroucelTrack = document.querySelector(".slides__track");
    const prevButton = document.querySelector(".caroucel__prev");
    const nextButton = document.querySelector(".caroucel__next");
    const bullets = document.querySelectorAll(".caroucel__bullet");

    let currentSlideIndex = 0;
    const slidesCount = document.querySelectorAll(".slide").length;

    function prevSlide() {
        caroucelTrack.prepend(caroucelTrack.lastElementChild);
        currentSlideIndex = (currentSlideIndex - 1 >= 0) ? (currentSlideIndex - 1) : (slidesCount - 1);
        setBulletActiveByIndex(currentSlideIndex);
    }

    function nextSlide() {
        caroucelTrack.appendChild(caroucelTrack.firstElementChild);
        currentSlideIndex = (currentSlideIndex + 1 < slidesCount) ? (currentSlideIndex + 1) : 0;
        setBulletActiveByIndex(currentSlideIndex);
    }

    function setBulletActiveByIndex(index) {
        for (const bullet of bullets) {
            bullet.classList.remove("active");
        }
        bullets[index]?.classList.add("active");
    }
    
    function goToSlide() {
        const bullet = this;
        const index = Number(bullet.dataset.index);
        const skipSlide = (currentSlideIndex < index) ? nextSlide : prevSlide;

        let skippedSlidesCount = Math.abs(currentSlideIndex - index);
        while (skippedSlidesCount) {
            skipSlide();
            skippedSlidesCount--;
        }
        currentSlideIndex = index;
        setBulletActiveByIndex(index);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    for (const bullet of bullets) {
        bullet.addEventListener("click", goToSlide);
    }
})();
