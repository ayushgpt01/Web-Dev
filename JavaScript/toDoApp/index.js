// Dom elemets
const input = document.querySelector("#task-input");
const taskBtn = document.querySelector("#task-btn");
const list = document.querySelector(".task-list ul");

// Variables
let inputValue = "";

// Event listeners
taskBtn.addEventListener("click", () => {
  inputValue = input.value;
  addTask(inputValue);
});

// Functions
const addTask = (value) => {
  const listItem = document.createElement("li");
  listItem.classList.add("task-item");

  const task = document.createElement("span");
  task.classList.add("task");
  task.innerText = value;

  const controls = document.createElement("span");
  controls.classList.add("controls");

  const button1 = document.createElement("button");
  button1.classList.add("controls-btn", "complete-btn");
  button1.innerText = "✔️";
  button1.addEventListener("click", handleControlsButton);

  const button2 = document.createElement("button");
  button2.classList.add("controls-btn", "remove-btn");
  button2.innerText = "❌";
  button2.addEventListener("click", handleControlsButton);

  listItem.appendChild(task);
  controls.appendChild(button1);
  controls.appendChild(button2);
  listItem.appendChild(controls);
  list.appendChild(listItem);
};

const removeTask = (el) => {
  el.parentNode.parentNode.remove();
};

const completeTask = (el) => {
  const task = el.parentNode.previousSibling;
  if (task.classList.contains("task-completed")) {
    task.classList.remove("task-completed");
  } else {
    task.classList.add("task-completed");
  }
};

const handleControlsButton = (e) => {
  const type = e.target.classList[1];
  if (type === "complete-btn") {
    completeTask(e.target);
  } else if (type === "remove-btn") {
    removeTask(e.target);
  }
};
