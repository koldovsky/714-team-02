(async function () {
    const response = await fetch("api/reviews-people.json");
    const people = await response.json();
  
    function renderCards(people) {
      const cardsContainer = document.querySelector(".words-of-gratitude__cards");
      for (const person of people) {
        cardsContainer.innerHTML += `
                    <article class="reviews__card">
                        <div class="reviews__card-image">
                            <img src="${person.photo}" alt="Photo of ${person.name}">
                        </div>
                        <div class="card__text">
                            <h3 class="card__title">${person.name}</h3>
                            <p class="card__short-description">${person.shortDescription}</p>
                            <q class="card__quote">${person.quote}</q>
                            <p class="card__date">${person.dateOfPublication}</p>
                        </div>
                    </article>
                `;
      }
    }
  
    renderCards(people);
  })();