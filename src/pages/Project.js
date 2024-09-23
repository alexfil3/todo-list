import Title from "../components/Title";
import Button from "../components/Button";
import List from "../components/List";
import Div from "../components/Div";
import removeClass from "../helpers/removeClass";
import openDialog from "../helpers/openDialog";
import createAddTaskDialog from "../helpers/createAddTaskDialog";
import renderTasks from "../helpers/renderTasks";
import manageTasksList from "../helpers/manageTasksList";

function Project(name, color, id) {
    const main = document.querySelector("#main");
    main.textContent = "";

    const array = Array.from(document.querySelectorAll(".pages-list-button"))
    removeClass(array, "", "active-page-button");

    const div = Div("project-div");
    const buttonSvg = Button("project-svg", "", "projectSvg", "../alien-svgrepo-com.svg", "svg");
    const svg = buttonSvg.querySelector("svg");
    svg.style.backgroundColor = color;
    const title = Title("h2", name, "main-page-title");
    const button = Button("main-add-task-btn", "Add task", "mainAddTaskButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddTaskDialog));
    const tasksList = List("project-tasks-list", manageTasksList);

    div.appendChild(buttonSvg);
    div.appendChild(title);
    main.appendChild(div);
    main.appendChild(button);
    main.appendChild(tasksList);

    renderTasks(name);
}

export default Project;