(function () {
  const days = document.getElementById("time__days");
  const hour = document.getElementById("time__hour");
  const minutes = document.getElementById("time__minutes");
  const seconds = document.getElementById("time__seconds");
  const daysCrimea = document.getElementById("crimea__days");
  const hourCrimea = document.getElementById("crimea__hour");
  const minutesCrimea = document.getElementById("crimea__minutes");
  const secondsCrimea = document.getElementById("crimea__seconds");

  const dayStartWar = new Date(`February 24 2022 03:40:00`);
  const dayOccupationCrimea = new Date(`March 18 2014 00:00:00`);

  function updateTimer() {
    const currentTime = new Date();
    const diff = currentTime - dayStartWar;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = d;
    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  }

  function updateTimerCrimea() {
    const currentTime = new Date();
    const diff = currentTime - dayOccupationCrimea;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    daysCrimea.innerHTML = d;
    hourCrimea.innerHTML = h;
    minutesCrimea.innerHTML = m;
    secondsCrimea.innerHTML = s;
  }

  setInterval(updateTimer, 1000);
  setInterval(updateTimerCrimea, 1000);
})();
