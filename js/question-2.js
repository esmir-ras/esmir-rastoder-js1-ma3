const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function getGames() {

const response = await fetch(url);

const apiresults = await response.json();

const facts = apiresults.results

resultsContainer.innerHTML = "";

for (let i = 0; i < facts.length; i++) {
   console.log(facts[i].name);
   console.log(facts[i].rating)
   console.log(facts[i].tags)
   
   if (i === 8) {
      break;
   }
    
   resultsContainer.innerHTML += `<div class="api-result"><b>Name</b>: ${facts[i].name}</div>`
   resultsContainer.innerHTML += `<div class="api-result"><b>Rating</b> ${facts[i].rating}</div>`
   resultsContainer.innerHTML += `<div class="api-result"><b>Tags</b> ${facts[i].tags.length}</div>`
   
   
}

}

getGames();







