/*
breeds/list/all = All breeds
breed/{breedName}/images/random = single image
*/
const selectEl = document.querySelector("select");

// API
const BASE_URL = `https://dog.ceo/api/`;

function getDogBreed() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((res) => res.json())
    .then((data) => {
      return Object.keys(data.message);
    })
    .catch((error) => console.log(error));
}

function renderOptions() {
  getDogBreed().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let breed of data) {
      const option = document.createElement("option");
      option.textContent = breed;
      fragment.appendChild(option);
    }
    selectEl.appendChild(fragment);
  });
}

renderOptions();
