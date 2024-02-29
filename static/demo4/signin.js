console.log("test script demo 4");

const submitSignIn = document.getElementById("submitSignIn");
submitSignIn.addEventListener("click", login, false);

async function getUsers() {
  try {
    const response = await fetch('http://localhost:3000/users')

    if (!response.ok) {
      throw new Error('Netwerkfout bij het ophalen van gegevens')
    }

    const data = await response.json()
    console.log("Data: ", data)
    const users = data.records
    console.log('Lijst van gebruikers: ', users)
    return users
    
  } catch (error) {
    console.error('Er is een fout opgetreden:', error)
  }
}


async function login(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    
    // haal de wachtwoorden op uit het JSON-bestand
    // gebruik await omdat getCredentials async functie is
     try {
        const users = await getUsers()

        // probeer de gebruiker met de opgegeven gebruikersnaam te vinden in de array met gebruikers
        // als deze gebruiker niet bestaat zal myUser undefined zijn
        const myUser = users.find(x => x.data.name === usernameInput.value)
        if (myUser) {
            console.log('Gebruiker gevonden: ', myUser)
        } else {
            console.log('Gebruiker niet gevonden')
        }
        
        // controleer of we een gebruiker met deze gebruikersnaam hebben gevonden en zo ja, 
        // of het wachtwoord overeenkomt
        if (myUser && myUser.data.password === passwordInput.value) {
            alert('Login successful!')
        } else {
            alert('Invalid username or password')
        }
    } catch (error) {
        console.error('Er is een fout opgetreden bij het inloggen:', error)
    }
}
