import renderTasks from "./renderTasks";

function editTask(id) {
    const title = document.querySelector("#taskNameInput") && document.querySelector("#taskNameInput").value;
    const description = document.querySelector("#taskDescriptionTextarea") && document.querySelector("#taskDescriptionTextarea").value;
    const dueDate = document.querySelector("#datepickerInput") && document.querySelector("#datepickerInput").value;
    const priority = document.querySelector("#priority p") && document.querySelector("#priority p").textContent;
    const project = document.querySelector("#project p") && document.querySelector("#project p").textContent;
    
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = tasks.map(task => {
        if (task.id === id) {
            if (title) {
                task.title = title;
            }
            if (description) {
                task.description = description;
            }
            if (dueDate) {
                task.dueDate = dueDate;
            }
            if (priority) {
                task.priority = priority;
            }
            if (project) {
                task.project = project;
            }
        }

        return task;
    });

    localStorage.setItem('tasks', JSON.stringify(newTasks));

    const projectDiv = document.querySelector(".project-div h2");
    renderTasks(projectDiv && projectDiv.textContent);
}

export default editTask;