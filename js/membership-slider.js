(function () {
  const membershipSlideData = [
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/exodus-travels.png" alt="Slide Exodus travels" />',
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/world-travel-market.png" alt="Slide World travel market" />',
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/global-passenger-network.png" alt="Slide Global passenger network" />',
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/tui.png" alt="Slide Tui" />',
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/wwf.png" alt="Slide Wwf" />',
    '<img class="membership-logo" src="img/about-membership-caroucel-slides/grand-american-adventures.png" alt="Slide Grand american adventures" />',
  ];

  let currentSlideIndex = 0;
  const slideContainer = document.querySelector(
    ".membership__slider .slider__carousel-membership"
  );

  function renderSlide() {
    slideContainer.innerHTML = membershipSlideData[currentSlideIndex];
    if (window.innerWidth > 480) {
      const secondSlideIndex =
        currentSlideIndex + 1 >= membershipSlideData.length
          ? 0
          : currentSlideIndex + 1;
      slideContainer.innerHTML += membershipSlideData[secondSlideIndex];
      if (window.innerWidth > 768) {
        const thirdSlideIndex =
          secondSlideIndex + 1 >= membershipSlideData.length
            ? 0
            : secondSlideIndex + 1;
        slideContainer.innerHTML += membershipSlideData[thirdSlideIndex];
        if (window.innerWidth > 990) {
          const fourthSlideIndex =
            thirdSlideIndex + 1 >= membershipSlideData.length
              ? 0
              : thirdSlideIndex + 1;
          slideContainer.innerHTML += membershipSlideData[fourthSlideIndex];
        }
      }
    }
  }

  function nextSlide() {
    currentSlideIndex =
      currentSlideIndex + 1 >= membershipSlideData.length
        ? 0
        : currentSlideIndex + 1;
    renderSlide();
  }

  function prevSlide() {
    currentSlideIndex =
      currentSlideIndex - 1 < 0
        ? membershipSlideData.length - 1
        : currentSlideIndex - 1;
    renderSlide();
  }

  const btnNext = document.querySelector(".fa-chevron-right");
  btnNext.addEventListener("click", nextSlide);

  const btnPrev = document.querySelector(".fa-chevron-left");
  btnPrev.addEventListener("click", prevSlide);

  renderSlide();
  window.addEventListener('resize', renderSlide);
  // setInterval(nextSlide, 5000)
})();
