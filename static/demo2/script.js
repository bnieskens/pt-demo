console.log("Hello client!");

/* DOG IMAGE API ************/
/* https://dog.ceo/dog-api/ */
/****************************/

const imgRandomDog = document.querySelector("#imgRandomDog");
const btnRandomDog = document.querySelector("#btnRandomDog");

async function getRandomDogImage() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  return data.message;
}

async function setNewDogImage() {
  const image = await getRandomDogImage();
  imgRandomDog.src = `${image}`;
}

btnRandomDog.addEventListener("click", setNewDogImage);

/* MARIIBO'S *****************/
/* https://www.amiiboapi.com */
/*****************************/

const baseURL = "https://www.amiiboapi.com/api/";
const endPoint = "amiibo/?gameseries=Super Mario";
const URL = baseURL + endPoint;

const list = document.querySelector("#ulMariibo");
const btnMariibo = document.querySelector("#btnMariibo");

async function getAmiibo() {
  const response = await fetch(URL);
  const data = await response.json();
  return data.amiibo;
}

async function setAmiibo() {
  amiibo = await getAmiibo();

  amiibo.forEach((amiibo) => {
    const amiiboListElement = document.createElement("li");
    amiiboListElement.innerHTML = `
            <li>
                <h3>${amiibo.character}</h3>
                <img src="${amiibo.image}" alt="${amiibo.character}" width=100>
            </li>
            `;
    list.appendChild(amiiboListElement);
  });
}
btnMariibo.addEventListener("click", setAmiibo);

/* MARIIBO'S *****************/
/* Empty & loading state *****/
/* https://www.amiiboapi.com */
/*****************************/
const loader = document.querySelector("#loaderDiv");

const listLoader = document.querySelector("#ulMariiboLoader");
const btnMariiboLoader = document.querySelector("#btnMariiboLoader");

async function getAmiiboLoader() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // GPT
  const response = await fetch(URL);
  const data = await response.json();
  return data.amiibo;
}

async function setAmiiboLoader() {
  loader.classList.add("loading");
  console.log("BTN loader clicked");
  amiibo = await getAmiiboLoader();
  loader.classList.remove("loading");
  amiibo.forEach((amiibo) => {
    const amiiboListElement = document.createElement("li");
    amiiboListElement.innerHTML = `
            <li>
                <h4>${amiibo.character}</h3>
                <img src="${amiibo.image}" alt="${amiibo.character}" height=100>
                <p>${amiibo.type}</p>
            </li>
            `;
    listLoader.appendChild(amiiboListElement);
  });
}

btnMariiboLoader.addEventListener("click", setAmiiboLoader);
