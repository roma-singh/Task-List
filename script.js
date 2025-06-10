document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const priority = document.getElementById("prioritySelect").value;
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = `task-item ${priority.toLowerCase()}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const taskSpan = document.createElement("span");
  taskSpan.className = "task-text";
  taskSpan.textContent = `[${priority}] ${taskText}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(taskItem);

  taskInput.value = "";

  checkbox.addEventListener("change", function () {
    taskSpan.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
  });
});
