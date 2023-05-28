document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const deleteCompletedBtn = document.getElementById("delete-completed-btn");
  
    let tasks = [];
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const task = input.value.trim();
      if (task !== "") {
        addTask(task);
        input.value = "";
      }
    });
  
    taskList.addEventListener("click", function(event) {
      if (event.target.matches(".task-checkbox")) {
        const taskId = event.target.getAttribute("data-id");
        toggleTaskCompletion(taskId);
      }
    });
  
    deleteCompletedBtn.addEventListener("click", function() {
      deleteCompletedTasks();
    });
  
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach(function(task) {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("data-id", task.id);
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.completed;
        const title = document.createElement("span");
        title.textContent = task.title;
        if (task.completed) {
          title.classList.add("is-completed");
        }
  
        listItem.appendChild(checkbox);
        listItem.appendChild(title);
        taskList.appendChild(listItem);
      });
    }
  
    function addTask(title) {
      const newTask = {
        id: Date.now().toString(),
        title: title,
        completed: false
      };
      tasks.push(newTask);
      renderTasks();
    }
  
    function toggleTaskCompletion(taskId) {
      tasks = tasks.map(function(task) {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      });
      renderTasks();
    }
  
    function deleteCompletedTasks() {
      tasks = tasks.filter(function(task) {
        return !task.completed;
      });
      renderTasks();
    }
  });
  