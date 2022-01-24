import { Imovies } from "./Imovies";

const containerDiv = document.getElementById("containerDiv");
const searchContainer = document.createElement("div");
searchContainer.id = "searchContainer";
containerDiv.append(searchContainer);

export function renderPage(moviesToRender: Imovies[]) {

    console.log(moviesToRender);

    searchContainer.innerHTML = "";
    if (moviesToRender) {

        for (let i = 0; i < moviesToRender.length; i++) {

            let movieContainer = document.createElement("div");
            movieContainer.id = moviesToRender[i].Title;
            let movieTitle = document.createElement("h1");
            let movieYear = document.createElement("h2");
            let moviePoster = document.createElement("img");
    
            movieTitle.innerText = moviesToRender[i].Title;
            movieYear.innerText = moviesToRender[i].Year;
            moviePoster.src = moviesToRender[i].Poster;
    
            movieContainer.append(movieTitle, movieYear, moviePoster);
            searchContainer.append(movieContainer);
    
        }
        
    } else {
        alert("no match!")
        
    }
}

searchContainer.addEventListener("click", function(evt){

    let target = evt.target.parentElement.id;

    renderMovieDetails(target)
    

})


function renderMovieDetails(selectesMovie){

    let thisMovie = fetch("http://www.omdbapi.com/?t=" + selectesMovie + "&apikey=5ed1c386").then(response => response.json())
    .then(film => {

        searchContainer.remove()

        const detailsContainer = document.createElement("div");
        detailsContainer.id = "detailsContainer";
        containerDiv.append(detailsContainer);

        let movieDetailsContainer = document.createElement("div");
        movieDetailsContainer.id = "movieDetailsContainer";
        let movieTitle = document.createElement("h1");
        let movieYear = document.createElement("h2");
        let moviePoster = document.createElement("img");
        let movieRuntime = document.createElement("h3");
        let movieRating = document.createElement("h3");
        let movieDirector = document.createElement("h3");
        let moviePlot = document.createElement("h2");

        movieTitle.innerText = film.Title;
        movieYear.innerText = film.Year;
        moviePoster.src = film.Poster;
        movieRuntime.innerText = film.Runtime;
        movieRating.innerText = film.Rated;
        movieDirector.innerText = film.Director;
        moviePlot.innerText = film.Plot;

        movieDetailsContainer.append(movieTitle, movieYear, moviePoster, movieRuntime, movieRating, movieDirector, moviePlot);
        detailsContainer.append(movieDetailsContainer);
    })
}