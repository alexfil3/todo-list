import ListItem from "../components/ListItem";
import Button from "../components/Button";

function renderProjects() {
    const allProjects = JSON.parse(localStorage.getItem("projects"));
    const projectsList = document.querySelector(".projects-list");
    projectsList.textContent = "";

    if (!allProjects) {
        return;
    }

    allProjects.forEach(({id, title, color}) => {
        const li = ListItem("project-list-item");
        li.setAttribute("id", id);
        const button = Button("project-list-item-button", title, id, "../alien-svgrepo-com.svg", "svg");
        const svg = button.querySelector("svg");
        if (color) {
            svg.style.backgroundColor = color;
        }

        li.appendChild(button);
        projectsList.appendChild(li);
    });
}

export default renderProjects;