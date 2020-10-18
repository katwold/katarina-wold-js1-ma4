const detailContainer = document.querySelector(".container-content");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.rawg.io/api/games/" + id;

console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(data) {
    detailContainer.innerHTML += `<h1>${data.name}</h1>
        <div class="details-description">Game id: ${data.id}</div>
        <div class="details-description">Game rating: ${data.rating}</div>
        <div class="details-description">Game URL: ${data.website}</div>
        <time class="details-date">Release date: ${data.released}</time>`;
}
