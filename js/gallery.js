(function () {
  
  const clockContainer = document.querySelector(".gallery__clock-container");

  function updateClock() {
    clockContainer.innerHTML = new Date().toLocaleString();
  }
  setInterval(updateClock, 1000);
})();
