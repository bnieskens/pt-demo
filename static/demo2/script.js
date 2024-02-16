console.log("Hello client!");

/* MARIIBO'S *****************/
/* LISTJS zoekfunctie *****/
/* https://www.amiiboapi.com */
/*****************************/
const loader = document.querySelector("#loaderDiv");

const listLoader = document.querySelector("#ulMariiboLoader");
const btnMariiboLoader = document.querySelector("#btnMariiboLoader");

async function getAmiiboLoader() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // GPT
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
                <h4 class="name">${amiibo.character}</h3>
                <img src="${amiibo.image}" alt="${amiibo.character}" height=100>
                <p class="type">${amiibo.type}</p>
            </li>
            `;
    listLoader.appendChild(amiiboListElement);
  });
}

btnMariiboLoader.addEventListener("click", setAmiiboLoader);

// ListJS

const options = {
  valueNames: ["name", "movie"]
}

const testList = new List("MariiboLoader", options)
console.log(typeof testList, testList.add)

