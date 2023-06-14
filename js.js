// Get required elements
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task event listener
addTaskButton.addEventListener('click', function () {
  const task = taskInput.value.trim();

  if (task !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox" class="task-check">
      <label>${task}</label>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    `;

    // Delete task event listener
    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });

    // Edit task event listener
    const editButton = taskItem.querySelector('.edit-button');
    editButton.addEventListener('click', function () {
      const label = taskItem.querySelector('label');
      const newTask = prompt('Enter the new task:', label.textContent);

      if (newTask !== null && newTask.trim() !== '') {
        label.textContent = newTask.trim();
      }
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});