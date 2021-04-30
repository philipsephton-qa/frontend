'use strict';

let monkey = document.querySelector("#monkey");
let div = document.querySelector(".addToMe");
monkey.setAttribute("width", "100px");

let newHeading = document.createElement("h1"); // <h1></h1>
let text = document.createTextNode("We love JS!"); // We love JS!
newHeading.appendChild(text); // <h1>We Love JS!</h1>
div.appendChild(newHeading); // appends our element to the div