import { Service } from "../models/service";

const myBtn = document.getElementById("myBtn");
let containerDiv = document.getElementById("containerDiv");

myBtn.addEventListener("click", function () {

    const inputValue = (document.getElementById("usersInput") as HTMLInputElement).value;

    // containerDiv.innerHTML = "";
    console.log("här");

    (document.getElementById("usersInput") as HTMLInputElement).value = ""
    

    let service = new Service(inputValue)

});
