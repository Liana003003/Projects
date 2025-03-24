const inputValue = document.querySelector('#enterTask');
const addButton = document.querySelector('#addTask');
const listOfTasks = document.querySelector('#listOfTasks');

addButton.addEventListener('click', () => {
    const todoText = inputValue.value.trim();
    
    if (todoText !== '') {
        const newTask = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
        newTask.classList.toggle('completed');
        });

 const taskText = document.createElement('span');
 taskText.textContent = todoText;

 const deleteButton = document.createElement('button');
 deleteButton.textContent = 'X';
 deleteButton.classList.add('delete-button');
 deleteButton.addEventListener('click', () => {
  newTask.remove();
 });

newTask.appendChild(checkbox);
newTask.appendChild(taskText);
newTask.appendChild(deleteButton);
listOfTasks.appendChild(newTask); 

inputValue.value = '';
  }
});

  function storeTasks() { 
    const tasks = [];
    document.querySelectorAll('#listOfTasks li span').forEach(task => {
      tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }