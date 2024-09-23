import Title from "../components/Title";
import Button from "../components/Button";
import List from "../components/List";
import removeClass from "../helpers/removeClass";
import openDialog from "../helpers/openDialog";
import createAddTaskDialog from "../helpers/createAddTaskDialog";
import renderTasks from "../helpers/renderTasks";
import manageTasksList from "../helpers/manageTasksList";

function Completed() {
    // find and clear content before appending child to it
    const main = document.querySelector("#main");
    main.textContent = "";

    // remove active class from other buttons
    const array = Array.from(document.querySelectorAll(".pages-list-button"))
    removeClass(array, "", "active-page-button");

    // add active class to the current button's page
    const activeButton = document.querySelector("#Completed");
    activeButton.classList.add("active-page-button");

    // call elements that we need on this page
    const title = Title("h2", "Completed", "main-page-title");
    const button = Button("main-add-task-btn", "Add task", "mainAddTaskButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddTaskDialog));
    const tasksList = List("completed-tasks-list", manageTasksList);

    // append elements
    main.appendChild(title);
    main.appendChild(button);
    main.appendChild(tasksList);

    renderTasks();
}

export default Completed;