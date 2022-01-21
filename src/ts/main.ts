import { Service } from "../models/service";

const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function () {

    const inputValue = (document.getElementById("usersInput") as HTMLInputElement).value;

    let service = new Service(inputValue)

    console.log(service);
    

});
