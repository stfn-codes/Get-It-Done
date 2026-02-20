const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item');
        // toggle completed on click and remove the item
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            listItem.remove();
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});