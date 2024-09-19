function addTaskToLocalStorage(task) {
    let tasks = [];
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default addTaskToLocalStorage;