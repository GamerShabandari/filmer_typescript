import { Iservice } from "./Iservice";

export class Service implements Iservice {

    constructor(movie: string) {

        this.getData(movie)

    }

    getData(movie: string): object {

        const containerDiv = document.getElementById("containerDiv");

        containerDiv.innerHTML = "";

        let thisMovie = fetch("http://www.omdbapi.com/?t=" + movie + "&apikey=5ed1c386").then(response => response.json())
            .then(data => {
                thisMovie = data

                let movieContainer = document.createElement("div");
                let movieTitle = document.createElement("h1");
                let movieYear = document.createElement("h2");
                let moviePoster = document.createElement("img");

                movieTitle.innerText = data.Title;
                movieYear.innerText = data.Year;
                moviePoster.src = data.Poster;

                movieContainer.append(movieTitle, movieYear, moviePoster);
                containerDiv.append(movieContainer);

            })
        return thisMovie;
    }
}