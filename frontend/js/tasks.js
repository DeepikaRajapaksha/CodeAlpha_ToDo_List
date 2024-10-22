const tasks = [
    { name: "Complete homework", status: "To-Do" },
    { name: "Workout", status: "Doing" },
    { name: "Read a book", status: "Done" }
];

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('tasks');
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.textContent = `${task.name} - ${task.status}`;
        taskList.appendChild(taskItem);
    });
});
