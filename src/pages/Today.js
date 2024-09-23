import Title from "../components/Title";
import Button from "../components/Button";
import List from "../components/List";
import removeClass from "../helpers/removeClass";
import openDialog from "../helpers/openDialog";
import createAddTaskDialog from "../helpers/createAddTaskDialog";
import renderTasks from "../helpers/renderTasks";
import manageTasksList from "../helpers/manageTasksList";

function Today() {
    const main = document.querySelector("#main");
    main.textContent = "";

    const array = Array.from(document.querySelectorAll(".pages-list-button"))
    removeClass(array, "", "active-page-button");

    const activeButton = document.querySelector("#Today");
    activeButton.classList.add("active-page-button");

    const title = Title("h2", "Today", "main-page-title");
    const button = Button("main-add-task-btn", "Add task", "mainAddTaskButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddTaskDialog));
    const tasksList = List("today-tasks-list", manageTasksList);

    main.appendChild(title);
    main.appendChild(button);
    main.appendChild(tasksList);

    renderTasks();
}

export default Today;