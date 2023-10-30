function addTask() {
    const taskText = document.getElementById('task').value;

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        document.getElementById('task').value = '';
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
