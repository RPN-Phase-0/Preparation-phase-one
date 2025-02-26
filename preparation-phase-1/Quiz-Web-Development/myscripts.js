function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.classList.add("close-btn");
  closeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(closeBtn);
  document.getElementById("todoList").appendChild(li);
  input.value = "";
}







// Search tasks function
function searchTasks() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toUpperCase();
  const todoList = document.getElementById("todoList");
  const items = todoList.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const taskText = items[i].textContent || items[i].innerText;
    if (taskText.toUpperCase().indexOf(searchInput) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

// Clear all tasks function
function clearAllTasks() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
}

// Toggle task completion
document.getElementById("todoList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
