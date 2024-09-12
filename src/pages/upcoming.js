import removeActiveButtonClass from "../helpers/removeActiveButtonClass";
import mainElement from "../components/main";
import titleForPage from "../components/title";
import addButton from "../components/button";

function upcoming() {
    const content = document.querySelector("#content");
    content.textContent = "";

    removeActiveButtonClass();

    const navButton = document.querySelector("#upcoming");
    navButton.classList.add("active-button");

    const main = mainElement();
    const title = titleForPage("Upcoming", "main-title");
    const button = addButton("Add task", "main-add-task-btn");

    main.appendChild(title);
    main.appendChild(button);
    content.appendChild(main);
}

export default upcoming;