
async function getQuote() {

let response = await fetch('https://meowfacts.herokuapp.com/');
const data = await response.json();
console.log(data);
let x = data.data[0];
let heading = document.querySelector("#quote");
heading.textContent = x;
history(x);
return x;


}

//select the h1 with an id of quote and ste this to be 
//the value of the json object
getQuote();

let button = document.querySelector("#new-quote-button");
button.addEventListener("click", getQuote);

function history(stringValue) {

let ol = document.querySelector("#quote-history");

let newLi = document.createElement("li");

ol.appendChild(newLi);

newLi.textContent = stringValue;
}