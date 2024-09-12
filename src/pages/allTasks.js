import removeActiveButtonClass from "../helpers/removeActiveButtonClass";
import mainElement from "../components/main";
import titleForPage from "../components/title";
import addButton from "../components/button";
import openItemDialog from "../helpers/openItemDialog";

function allTasks() {
    // find and clear content before appending child to it
    const content = document.querySelector("#content");
    content.textContent = "";

    // remove active class from other buttons
    removeActiveButtonClass();

    // add active class to the current button's page
    const navButton = document.querySelector("#allTasks");
    navButton.classList.add("active-button");

    // call elements that we need on this page
    const main = mainElement();
    const title = titleForPage("All tasks", "main-title");
    const button = addButton("Add task", "main-add-task-btn");

    // append elements
    main.appendChild(title);
    main.appendChild(button);
    content.appendChild(main);

    // add event listener to the element
    button.addEventListener("click", openItemDialog)
}

export default allTasks;