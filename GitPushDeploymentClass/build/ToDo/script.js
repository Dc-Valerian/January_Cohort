const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const taskInput = document.getElementById("taskInput");

addTaskBtn.addEventListener("click", function () {
  const taskValue = taskInput.value;

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  // Mark completed task
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });


  
  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});
