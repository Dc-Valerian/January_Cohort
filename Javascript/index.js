let message = document.getElementById("hero");

console.log(message);

const btn = document.getElementsByName("testing");
console.log(btn);

const heading = document.getElementById("title");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  heading.textContent = "welcome to the world of JavaScript";
});

const text = document.getElementById("text");
const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function () {
  text.style.color = "blue";
  text.style.fontSize = "40px";
  text.style.backgroundColor = "yellow";
});

//    EYES BUTTON
const pass = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    toggle.textContent = "Hide password";
  } else {
    pass.type = "password";
    toggle.textContent = "show password";
  }
});

// Adding Items to a list
const task = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

// addBtn.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = task.value;
//   list.appendChild(li);

//   task.value = "valerian";
// });

addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = task.value + " " + "is added to the list";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  task.value = "";
  li.appendChild(delBtn);
  list.appendChild(li);
});

// Mouse Hover Effect
const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "lightblue";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "red";
});
