/*
breeds/list/all = All breeds
breed/{breedName}/images/random = single image
*/

import { capitalize } from "./utils";

// DOM Selection
const selectEl = document.querySelector("select");
const imgEl = document.querySelector("img");

// API
const BASE_URL = `https://dog.ceo/api/`;

// === MARK: Fetch
// Gets the list of all breeds
function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((res) => res.json())
    .then((data) => {
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

// Gets a single image on breed
function getSingleImage(breed) {
  return fetch(`${BASE_URL}breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.log(err));
}

// === MARK: Render
// Renders options inside select
function renderOptions() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();

    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = capitalize(breed);
      option.value = breed;
      fragment.appendChild(option);
    }

    selectEl.appendChild(fragment);
  });
}

renderOptions();

// Change on user select
selectEl.addEventListener("change", (event) => {
  getSingleImage(event.target.value).then((data) => {
    imgEl.src = data;
  });
});
