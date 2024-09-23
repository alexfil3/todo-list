import createTodoItem from "../managers/todoItem";
import addTaskToLocalStorage from "./addTaskToLocalStorage";
import renderTasks from "./renderTasks";

function submitTask() {
    const title = document.querySelector("#taskNameInput").value;
    const description = document.querySelector("#taskDescriptionTextarea").value;
    const dueDate = document.querySelector("#datepickerInput").value;
    const priority = document.querySelector("#priority p").textContent;
    const project = document.querySelector("#project p").textContent;
    const completed = false;

    const todoItem = createTodoItem(title, description, dueDate, priority, project, completed);

    const task = {
        id: todoItem.getId(),
        title: todoItem.getTitle(),
        description: todoItem.getDescription(),
        dueDate: todoItem.getDueDate(),
        priority: todoItem.getPriority(),
        project: todoItem.getProject(),
        completed: todoItem.getCompleted(),
    }

    const projectDiv = document.querySelector(".project-div h2");

    addTaskToLocalStorage(task);
    renderTasks(projectDiv && projectDiv.textContent);
}

export default submitTask;