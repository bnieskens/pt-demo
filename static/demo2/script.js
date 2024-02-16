console.log("Hello client!");

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
                <h4>${amiibo.character}</h4>
                <img src="${amiibo.image}" alt="${amiibo.character}" height=100>
                <p>${amiibo.type}</p>
            `;
    listLoader.appendChild(amiiboListElement);
  });
}

btnMariiboLoader.addEventListener("click", setAmiiboLoader);
