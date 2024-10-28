import { capitalize } from "./utils";

// DOM Selection
const selectEl = document.querySelector("select");
const carouselContainer = document.querySelector(".carousel-inner");

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

// Gets [imagesx10] on breed
function getBreedImages(breed) {
  return fetch(`${BASE_URL}breed/${breed}/images`)
    .then((res) => res.json())
    .then((data) => data.message.slice(0, 10))
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

function renderCarousel(breed) {
  getBreedImages(breed).then((data) => console.log(data));
}

// Change on user select
selectEl.addEventListener("change", (event) => {
  renderCarousel(event.target.value);
});

renderOptions();
