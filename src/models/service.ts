import { Iservice } from "./Iservice";
import { renderPage } from "./renderPage";

export class Service implements Iservice {

    constructor(movie: string) {

        this.getData(movie)

    }

    getData(movie: string): void {

        //const containerDiv = document.getElementById("containerDiv");
        // let searchContainer = document.createElement("div");
        // searchContainer.id = "searchContainer";
        // containerDiv.append(searchContainer);
        

        // searchContainer.innerHTML = "";

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=5ed1c386&s=" + movie).then(response => response.json())
            .then(data => {
                let matchedMovies = data.Search

                renderPage(matchedMovies);

            })

    }
}