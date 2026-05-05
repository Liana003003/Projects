const inputValue = document.querySelector('#enterTask');
const addButton = document.querySelector('#addTask');
const listOfTasks = document.querySelector('#listOfTasks');

addButton.addEventListener('click', () => {
  const todoText = inputValue.value.trim();

  if (todoText !== '') {
    const newTask = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    checkbox.addEventListener('change', () => {
      newTask.classList.toggle('completed');
      storeTasks();
    });

    deleteButton.addEventListener('click', () => {
      newTask.remove();
      storeTasks();
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    listOfTasks.appendChild(newTask);

    inputValue.value = '';

    storeTasks();
  }
});

function loadTasks() {
  const stored = JSON.parse(localStorage.getItem('tasks')) || [];

  stored.forEach(task => {
    const newTask = document.createElement('li');

    if (task.completed) {
      newTask.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const taskText = document.createElement('span');
    taskText.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    checkbox.addEventListener('change', () => {
      newTask.classList.toggle('completed');
      storeTasks();
    });

    deleteButton.addEventListener('click', () => {
      newTask.remove();
      storeTasks();
    });

    newTask.appendChild(checkbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    listOfTasks.appendChild(newTask);
  });
}

loadTasks();

  function storeTasks() {
  const tasks = [];

  document.querySelectorAll('#listOfTasks li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.classList.contains('completed')
    });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}