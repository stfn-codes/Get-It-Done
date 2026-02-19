const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.textContent = taskText;
        // toggle completed on click
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // remove item on double-click
        listItem.addEventListener('dblclick', () => {
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});