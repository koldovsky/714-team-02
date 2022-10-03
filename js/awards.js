(async function () {
    const response = await fetch("api/awards.json");
    const awards = await response.json();
  
    function renderAwards(awards) {
      const awardsContainer = document.querySelector(".awards__container");
      for (const award of awards) {
        awardsContainer.innerHTML += `
                              <div class="award">
                                  <div class="award__image">
                                      <img src="${award.image}" alt="${award.name} award image">
                                  </div>
                                  <div class="award__name">${award.name}</div>
                              </div>
                      `;
      }
    }
  
    renderAwards(awards);
  })();