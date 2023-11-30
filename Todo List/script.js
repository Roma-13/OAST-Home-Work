class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  displayTasks() {
    const list = document.getElementById("todo-list");
    list.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task}</span>
        <button onclick="removeTask(${index})">Remove</button>
      `;
      list.appendChild(li);
    });
  }
}

function addTask() {
  const taskInput = document.getElementById("task-input");
  const task = taskInput.value.trim();

  if (task !== "") {
    todoList.addTask(task);
    todoList.displayTasks();
    taskInput.value = "";
  }
}

function removeTask(index) {
  todoList.removeTask(index);
  todoList.displayTasks();
}

const todoList = new TodoList();
