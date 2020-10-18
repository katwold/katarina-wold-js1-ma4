const container = document.querySelector(".container");

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        createHtml(details.results);
      
    }
    catch(error) {
        console.log(error);
    }
    
}


fetchGame();


function createHtml(data) {

    for (let i = 0; i < data.length; i++) {

        container.innerHTML += `<h1>${data[i].name}</h1>
        <div class="details-description">Game id: ${data[i].id}</div>
        <div class="details-description">Game rating: ${data[i].rating}</div>
        <time class="details-date">Release date: ${data[i].released}</time>`;
    }
}
