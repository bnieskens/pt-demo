
console.log("Hello client!!!")

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