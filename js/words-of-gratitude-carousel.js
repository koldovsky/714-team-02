(function () {
    const prev = document.querySelector(".gratitude__prev");
    const next = document.querySelector(".gratitude__next");
    const sliderContainer = document.querySelector(".workers__gratitude");
    function prevSlide() {
      const slides = document.querySelectorAll(".worker__gratitude");
      const slideWidth = slides[0].getBoundingClientRect().width;
      sliderContainer.scrollLeft -= slideWidth + 100;
    }
    prev.addEventListener("click", prevSlide);
    function nextSlide() {
      const slides = document.querySelectorAll(".worker__gratitude");
      const slideWidth = slides[0].getBoundingClientRect().width;
      sliderContainer.scrollLeft += slideWidth + 100;
    }
    next.addEventListener("click", nextSlide);
  })();
  