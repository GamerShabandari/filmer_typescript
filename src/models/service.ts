import { Iservice } from "./Iservice";

export class Service implements Iservice {

    constructor(movie: string) {

        this.getData(movie)

    }

    getData(movie: string): any {

        const containerDiv = document.getElementById("containerDiv");

        containerDiv.innerHTML = "";

        fetch("http://www.omdbapi.com/?t=" + movie + "&apikey=5ed1c386").then(response => response.json())
            .then(data => {
                const thisMovie = data
                console.log(thisMovie);

                console.log(movie);

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
    }
}