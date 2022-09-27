(function() {
    

    const guidesData = [
        {
            id: 0,
            img: "img/ann-leroy-foto.jpg",
            name: "Ann Leroy",
            experience: "Tour Operator, 6 years of experience",
            title: "Ann joined the staff of Cilantro in 2012. She is an expert tour guide. She knows all the gems and the best sights to discover in France.",
            languages: "English, French, German",
        },
        {
            id: 1,
            img: "img/paul-rouge-foto.jpg",
            name: "Paul Rouge",
            experience: "Senior Tour Agent, 10 years of experience",
            title: "Paul is our licensed senior tour agent with more than 10 years of travel industry experience under his belt.",
            languages: "English, French, Italian",
        },
        {
            id: 2,
            img: "img/joyce-buckland-foto.jpg",
            name: "Joyce Buckland",
            experience: "Tour Guide, 4 years of experience",
            title: "Joyce joined our team as a travel guide. She is always very friendly and attentive to clients to help them get a memorable travel experience.",
            languages: "English, French",
        },
    ];

    
    function renderGuideCard(guidesData) {
        const cilantroGuidesCards = document.querySelector('.cilantro-guides__cards');
        cilantroGuidesCards.innerHTML = '';
        for (const card of guidesData) {
            cilantroGuidesCards.innerHTML += `
            <div class="guide-card">
              <div class="guide-card__header-footer">
                <img
                  class="guide-card__image"
                  src="${card.img}"
                  alt="${card.name}"
                />
                <h3 class="guide-card__name">${card.name}</h3>
                <p class="guide-card__experience">
                ${card.experience}
                </p>
              </div>
              <p class="guide-card__title">
              ${card.title}
              </p>
              <div class="guide-card__header-footer">
                <p class="guide-card__experience">
                  Languages: ${card.languages}
                </p>
                <div class="card__brands-container">
                  <a
                    href="https://facebook.com/"
                    target="blank"
                    class="brand topbar__brand"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="blank"
                    class="brand topbar__brand"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://youtube.com/"
                    target="blank"
                    class="brand topbar__brand"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            `
        }
    }

    renderGuideCard(guidesData);


})();