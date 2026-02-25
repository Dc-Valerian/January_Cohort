const form = document.getElementById("loginform");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username);

  console.log(password);

  if (username === "" || password === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Login successful!";
    message.style.color = "green";
  }
});

// CREATING ELEMENT

const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
  const input = document.getElementById("itemInput").value;

  const li = document.createElement("li");
  li.textContent = input;

  itemInput.value = "";

  list.appendChild(li);

  li.addEventListener("click", function () {
    li.remove();
  });
});
