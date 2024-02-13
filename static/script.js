
console.log("Hello client!")

/* DOG IMAGE API ************/
/* https://dog.ceo/dog-api/ */
/****************************/

const imgRandomDog = document.querySelector("#imgRandomDog")
const btnRandomDog = document.querySelector("#btnRandomDog")

async function getRandomDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    return data.message
}

async function setNewDogImage(){
    const image = await getRandomDogImage()
    imgRandomDog.src = `${image}`
}

btnRandomDog.addEventListener('click', setNewDogImage)


/* MARIIBO'S *****************/
/* https://www.amiiboapi.com */
/*****************************/
// api documentation: 
const baseURL = "https://www.amiiboapi.com/api/";
const endPoint = "amiibo/?gameseries=Super Mario";
const URL = baseURL+endPoint;

const list = document.querySelector('#ulMariibo');
const btnMariibo = document.querySelector('#btnMariibo');

async function getAmiibo() {
	const response = await fetch(URL)
	const data = await response.json()
    return data.amiibo
}

async function setAmiibo(){

    amiibo = await getAmiibo()

    amiibo.forEach((amiibo) => {
        const amiiboListElement = document.createElement("li")
        amiiboListElement.innerHTML = 
            `
            <li>
                <h3>${amiibo.character}</h3>
                <img src="${amiibo.image}" alt="${amiibo.character}" width=100>
            </li>
            `
        list.appendChild(amiiboListElement)
    })

}
btnMariibo.addEventListener('click', setAmiibo)