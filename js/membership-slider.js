(function () {
  const membershipSlideData = [
    {
      id: 0,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 1,
      img: "img/tui.png",
      alt: "tui logo",
    },
    {
      id: 2,
      img: "img/gpnetwork.png",
      alt: "global passenger network logo",
    },
    {
      id: 3,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 4,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 5,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 6,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 7,
      img: "img/panda.png",
      alt: "wwf logo",
    },
    {
      id: 8,
      img: "img/panda.png",
      alt: "wwf logo",
    },
  ];

  let currentSlideIndex = 0;

  function renderSlide(membershipSlideData) {
    const slideContainer = document.querySelector(
      ".membership__slider .slider__carousel-membership"
    );
    slideContainer.innerHTML = "";
    for (const logo of membershipSlideData) {
      slideContainer.innerHTML = `
        <img class="membership-logo" src="${logo.img}" alt="${logo.alt}" />
        `;
    }
  }

  renderSlide(membershipSlideData);
})();
