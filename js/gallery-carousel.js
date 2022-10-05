(function () {
  // робим масив з картинок
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
                    <img class="card__image" src="img/torre_de_belem.jpeg" alt="Normandy tour image">
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

  // присвоюємо індекс 0 початковому слайду
  let currentSlideIdx = 0;

  // вибираєм з html селектором діви де будуть наші слайди і присвоюємо перемінній
  const slideContainer = document.querySelector(
    ".images-carousel .carousel-slides"
  );

  // функція, що виводить слайди в html
  function renderSlide() {
    //беремо значення currentSlideIdx і вписуємо його в InnerHtml (початковий індекс масиву slides)
    slideContainer.innerHTML = slides[currentSlideIdx];
    // робимо декілька слайдів в залежності від ширини екрана

    if (window.innerWidth >= 767) {
      // два слайди на сторінку
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];

      //три слайди на сторінку
      if (window.innerWidth >= 991) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  // функція що міняє слайди по натисненню на кнопочку = currentSlide збільнити на одичинку
  function nextSlide() {
    // перевіряєм чи це не останній по порядку слайд, щоб було куди далі лістати
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
  }

  function prevSlide() {
    // перевіряєм чи попередній слайд мінусовий, якщо так, то
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
  }

  // викликаємо функцію, щоб js запрацював на сторінці і перший слайд вивевся і далі інші
  renderSlide();

  //   setInterval(nextSlide, 5000);

  // вибираєм кнопку некст
  const btnNext = document.querySelector(".images-carousel .btn-next");
  // коли клікаєм на кнопку, запускається функція, що міняє на наступний слайд
  btnNext.addEventListener("click", nextSlide);

  // вибираєм кнопку прев
  const btnPrev = document.querySelector(".images-carousel .btn-prev");
  // коли клікаєм на кнопку, запускається функція, що міняє на попередній слайд
  btnPrev.addEventListener("click", prevSlide);

  // обробник події на зміну ширини екрану (щоб адаптивно змінювалась кількість картинох, відображених в галереї)
  window.addEventListener("resize", renderSlide);
})();
