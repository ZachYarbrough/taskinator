var formEl = document.querySelector("#task-form")
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
    event.preventDefault();

    var taskItemEl = document.createElement("li");

    taskItemEl.textContent = "New List Element";
    taskItemEl.className = "task-item";
    tasksToDoEl.appendChild(taskItemEl);

    console.log(event);
}

formEl.addEventListener("submit", createTaskHandler);