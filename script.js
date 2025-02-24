// script.js

document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task !== "") {
        const li = document.createElement('li');
        li.textContent = task;

        // Mark task as completed on click
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(removeButton);

        // Add task to the list
        document.getElementById('todo-list').appendChild(li);

        // Clear the input field
        input.value = '';
    } else {
        alert("Please enter a task.");
    }
}
