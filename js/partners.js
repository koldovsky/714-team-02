(async function () {
    const response = await fetch("api/partners.json");
    const partners = await response.json();
  
    function renderPartners(partners) {
      const partnersContainer = document.querySelector(".partners__container");
      for (const partner of partners) {
        partnersContainer.innerHTML += `
                    <div class="partner">
                        <img src="${partner.image}" alt="Logo of ${partner.name}">
                    </div>
                `;
      }
    }
  
    renderPartners(partners);
  })();