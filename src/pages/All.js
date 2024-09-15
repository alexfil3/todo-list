import Title from "../newComponents/Title";
import Button from "../newComponents/Button";
import removeClass from "../newHelpers/removeClass";
import openDialog from "../newHelpers/openDialog";
import createAddTaskDialog from "../newHelpers/createAddTaskDialog";

function All() {
    // find and clear content before appending child to it
    const main = document.querySelector("#main");
    main.textContent = "";

    // remove active class from other buttons
    const array = Array.from(document.querySelectorAll(".pages-list-button"))
    removeClass(array, "", "active-page-button");

    // add active class to the current button's page
    const activeButton = document.querySelector("#All");
    activeButton.classList.add("active-page-button");

    // call elements that we need on this page
    const title = Title("h2", "All", "main-page-title");
    const button = Button("main-add-task-btn", "Add task", "mainAddTaskButton", "../alien-svgrepo-com.svg", "svg",  () => openDialog(createAddTaskDialog));

    // append elements
    main.appendChild(title);
    main.appendChild(button);
}

export default All;