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
        <div class="data-id">Game id: ${data[i].id}</div>
        <div class="data-rating">Game rating: ${data[i].rating}</div>
        <div class="data-link"><a href="question3.html?id=${data[i].id}">Game Link: ${data[i].id}</a></div>
        <time class="data-releasedate">Release date: ${data[i].released}</time>`;
    }
}
