import openDialog from "./openDialog";
import createAddTaskDialog from "./createAddTaskDialog";
import renderTasks from "./renderTasks";

function manageTasksList(e) { 
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const button = e.target.closest("button");
    if (!button) {
        return;
    }
    const taskId = e.target.closest("li").id;
    console.log(taskId)

    if (button.id === "completedButton") {
        const completedTask = allTasks.map(task => {
            if (task.id === taskId) {
                task.completed = true;
            }

            return task
        })
        localStorage.setItem('tasks', JSON.stringify(completedTask));

        const projectDiv = document.querySelector(".project-div h2");
        renderTasks(projectDiv && projectDiv.textContent);
    }

    if (button.id === "deleteButton") {
        const remainTasks = allTasks.filter(task => task.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(remainTasks));

        const projectDiv = document.querySelector(".project-div h2");
        renderTasks(projectDiv && projectDiv.textContent);
    }

    if (button.id === "editButton") {
        openDialog(createAddTaskDialog, );
    }
}

export default manageTasksList;