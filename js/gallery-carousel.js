(function () {
  const slides = [
    `<article class="card">
                    <img class="card__image" src="img/royal_palace_madrid.jpg" alt="Paris tour image">
                    <h4 class="gallery__h4">Paris in spring</h4>
                </article>`,
    `<article class="card">
                    <img class="card__image" src="img/luara_castle.jpeg" alt="Burgundy tour image">
                    <h4 class="gallery__h4">Burgundy culture and wine</h4>
                </article>`,
    `<article class="card">
                    <img class="card__image" src="img/hungarian_parliament.jpeg" alt="Budapest tour image">
                    <h4 class="gallery__h4">Budapest parliament guided tours</h4>
                </article>`,
    `<article class="card">
                    <img class="card__image" src="img/torre_de_belem.jpg" alt="Normandy tour image">
                    <h4 class="gallery__h4">Normandy Tour</h4>
                </article>`,
    `<article class="card">
                    <img class="card__image" src="img/paris_seine.jpg" alt="Paris in autumn tour image">
                    <h4 class="gallery__h4">Paris in autumn</h4>
                </article>`,
    `<article class="card">
                    <img class="card__image" src="img/gothic_buildings.jpg" alt="Paris tour image">
                    <h4 class="gallery__h4">Charming Paris tour</h4>
                </article>`,
  ];

  let currentSlideIdx = 0;
  window.addEventListener("resize", renderSlide);

  const btnNext = document.querySelector(".images-carousel .btn-next");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".images-carousel .btn-prev");
  btnPrev.addEventListener("click", prevSlide);

  const slideContainer = document.querySelector(
    ".images-carousel .carousel-slides"
  );

  function renderSlide() {
    slideContainer.innerHTML = slides[currentSlideIdx];

    if (window.innerWidth >= 767) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth >= 991) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  function nextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }

  function prevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }
  renderSlide();

})();
