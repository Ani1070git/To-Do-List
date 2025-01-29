const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load saved tasks when the page loads
document.addEventListener("DOMContentLoaded", showTask);

function addTask() {
  if (inputBox.value === "") {
    alert("You have to enter something!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; // 'X' delete button

  li.appendChild(span);
  listContainer.appendChild(li);

  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTask() {
  const savedData = localStorage.getItem("tasks");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}
