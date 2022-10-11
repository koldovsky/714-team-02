let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(slideNumber) {
  showSlides((slideIndex += slideNumber));
}

// Thumbnail image controls
function currentSlide(slideNumber) {
  showSlides((slideIndex = slideNumber));
}

function showSlides(slideNumber) {
  let slides = document.getElementsByClassName("card");
  if (slideNumber > slides.length - 1) {
    slideIndex = 0;
  }
  if (slideNumber < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "grid";

  // два слайди на сторінку
  if (window.innerWidth >= 767) {
    let secondSlideIdx;
    let slideIndexPlusOne = slideIndex + 1;
    if (slideIndexPlusOne >= slides.length) {
      secondSlideIdx = 0;
    } else {
      secondSlideIdx = slideIndex + 1;
    }
    slides[secondSlideIdx].style.display = "grid";

    //три слайди на сторінку
    if (window.innerWidth >= 991) {
      let thirdSlideIdx;
      let secondSlideIdxPlusOne = secondSlideIdx + 1;
      if (secondSlideIdxPlusOne >= slides.length) {
        thirdSlideIdx = 0;
      } else {
        thirdSlideIdx = secondSlideIdx + 1;
      }
      slides[thirdSlideIdx].style.display = "grid";
    }
  }
}
// обробник події на зміну ширини екрану (щоб адаптивно змінювалась кількість картинох, відображених в галереї)
window.addEventListener("resize", showSlides);
