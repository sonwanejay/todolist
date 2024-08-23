document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        
        li.innerHTML = `<span>${taskText}</span>
                        <button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
        taskInput.value = '';
    }
}
