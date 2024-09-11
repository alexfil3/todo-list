import mainElement from "../components/main";
import titleForPage from "../components/titleForPage";
import addButton from "../components/addButton";

function upcoming() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const main = mainElement();
    const title = titleForPage("Upcoming");
    const button = addButton("Add task");

    main.appendChild(title);
    main.appendChild(button);
    content.appendChild(main);
}

export default upcoming;