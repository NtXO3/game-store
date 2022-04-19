let games;

async function renderGames(filter) {
    const gamesWrapper = document.querySelector('.games');

    gamesWrapper.classList += ' games__loading'

    if (!games) {
      games = await getGames();
    }

    gamesWrapper.classList.remove('games__loading')

    console.log(games)

    if(filter === 'LOW_TO_HIGH') {
      games.sort((a,b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
    }
    else if (filter === 'HIGH_TO_LOW') {
      games.sort((a,b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
    }
    else if (filter === 'RATING') {
      games.sort((a,b) => b.rating - a.rating)
    }

    const gamesHTML = games.map((game) => {
      return `<div class="game">
        <figure class="game__img--wrapper">
            <img class="game__img" src= "${game.url}" alt="">
        </figure>
        <div class="game__title">
            ${game.title}
        </div>
        <div class="game__ratings">
            ${ratingsHTML(game.rating)}
        </div>
        <div class="game__price">
            ${priceHTML(game.originalPrice, game.salePrice)}
        </div>
    </div>`
    }).join('');

    
    
    gamesWrapper.innerHTML = gamesHTML;
}


function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `€${originalPrice.toFixed(2)}`
  }
  else {
    return `<div class="game__price">
    <span class="game__price--normal">€${originalPrice}</span>€${salePrice}
    </div>`
  }
}

function ratingsHTML(rating) {
  let ratingHTML = '';
    for (let i = 0; i < Math.floor(rating); ++i) {
      ratingHTML += `<i class="fas fa-star"></i>\n`
    }
    if(!Number.isInteger(rating)) {
      ratingHTML += `<i class="fas fa-star-half-alt"></i>\n`
    }
    for (let i = Math.ceil(rating); i < 5; ++i) {
      ratingHTML += `<i class="far fa-star"></i>\n`
    }

    return ratingHTML;
}

function filterGames(event) {
    renderGames(event.target.value)
}

setTimeout(() => {
    renderGames();
})

function getGames() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "FIFA 22",
            url: "./Assets/fifa22 new.jpg",
            originalPrice: 69.99,
            salePrice: null,
            rating: 4.5,
          },
          {
            id: 2,
            title: "Battlefield 2042",
            url: "./Assets/battefield 2042 ps4.jpg",
            originalPrice: 64.99,
            salePrice: 54.99,
            rating: 2.5,
          },
          {
            id: 3,
            title: "Call of Duty: Vanguard",
            url: "./Assets/cod vanguard.jpg",
            originalPrice: 69.99,
            salePrice: 59.99,
            rating: 5,
          },
          {
            id: 4,
            title: "Far Cry 6",
            url: "./Assets/far cry 6.jpg",
            originalPrice: 69.99,
            salePrice: 42.99,
            rating: 4.5,
          },
          {
            id: 5,
            title: "Just Dance 2022",
            url: "./Assets/just dance 4.jpg",
            originalPrice: 49.99,
            salePrice: 36.99,
            rating: 4,
          },
          {
            id: 6,
            title: "NBA 2K22",
            url: "./Assets/nba 2k22.jpg",
            originalPrice: 44.99,
            salePrice: 36.99,
            rating: 2,
          },
          {
            id: 7,
            title: "Assassin's Creed Valhalla",
            url: "./Assets/assassins creed valhalla.jpg",
            originalPrice: 69.99,
            salePrice: 56.99,
            rating: 4,
          },
          {
            id: 8,
            title: "F1 2021",
            url: "./Assets/f1 2021.jpg",
            originalPrice: 69.99,
            salePrice: 42.99,
            rating: 5,
          },
          {
            id: 9,
            title: "GTA V",
            url: "./Assets/gta v.jpg",
            originalPrice: 36.99,
            salePrice: 19.99,
            rating: 5,
          },
          {
            id: 10,
            title: "Call of Duty: Cold War",
            url: "./Assets/cold war.webp",
            originalPrice: 64.99,
            salePrice: 46.95,
            rating: 4.5,
          },
          {
            id: 11,
            title: "Rocket League",
            url: "./Assets/rocket league.jpg",
            originalPrice: 34.99,
            salePrice: 19.99,
            rating: 4.5,
          },
          {
            id: 12,
            title: "Battlefield V",
            url: "./Assets/battlefield v.jpg",
            originalPrice: 36.99,
            salePrice: 24.99,
            rating: 4.5,
          },
        ]);
      }, 1000);
    })
  }