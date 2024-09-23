import Title from "../components/Title";
import Button from "../components/Button";
import List from "../components/List";
import removeClass from "../helpers/removeClass";
import openDialog from "../helpers/openDialog";
import createAddTaskDialog from "../helpers/createAddTaskDialog";
import renderTasks from "../helpers/renderTasks";

function Upcoming() {
    const main = document.querySelector("#main");
    main.textContent = "";

    const array = Array.from(document.querySelectorAll(".pages-list-button"))
    removeClass(array, "", "active-page-button");

    const activeButton = document.querySelector("#Upcoming");
    activeButton.classList.add("active-page-button");

    const title = Title("h2", "Upcoming", "main-page-title");
    const button = Button("main-add-task-btn", "Add task", "mainAddTaskButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddTaskDialog));
    const tasksList = List("upcoming-tasks-list", () => console.log("handle completed"));

    main.appendChild(title);
    main.appendChild(button);
    main.appendChild(tasksList);

    renderTasks()
}

export default Upcoming;