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

  function updateTimer(date) {
    const currentTime = new Date();
    const diff = currentTime - date;

    return {
      d: Math.floor(diff / 1000 / 60 / 60 / 24),
      h: Math.floor(diff / 1000 / 60 / 60) % 24,
      m: Math.floor(diff / 1000 / 60) % 60,
      s: Math.floor(diff / 1000) % 60,
    };
  }

  function renderDate() {
    const timeWar = updateTimer(dayStartWar);

    days.innerHTML = timeWar.d;
    hour.innerHTML = timeWar.h;
    minutes.innerHTML = timeWar.m;
    seconds.innerHTML = timeWar.s;
  }

  function renderDateCrimea() {
    const timeWar = updateTimer(dayOccupationCrimea);

    daysCrimea.innerHTML = timeWar.d;
    hourCrimea.innerHTML = timeWar.h;
    minutesCrimea.innerHTML = timeWar.m;
    secondsCrimea.innerHTML = timeWar.s;
  }

  setInterval(renderDate, 1000);
  setInterval(renderDateCrimea, 1000);
})();
