console.log("test script demo 4");

const submit = document.getElementById("submit");

submit.addEventListener("click", createUser, false);

async function createUser(event) {
  event.preventDefault();
  const response = await fetch("http://localhost:3000/music", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: username.value,
      instrument: password.value,
    }),
  });
}
