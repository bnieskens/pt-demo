console.log("test script demo 4");

const submitRegister = document.getElementById("submitRegister");

submitRegister.addEventListener("click", createUser, false);


async function createUser(event) {
  event.preventDefault();
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username.value,
      password: password.value,
    }),
  });
}

