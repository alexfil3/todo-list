import ListItem from "../components/ListItem";
import Button from "../components/Button";

function createProjectList(list, listItemClassName, buttonClassName) {
    const listToAppend = list;
    const localStorageProjects = JSON.parse(localStorage.getItem("projects"));
    const projects = [...localStorageProjects, {id: "noProject", title: "No project",  color: "",}];

    projects.forEach(({id, title, color}) => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, title, id, "../alien-svgrepo-com.svg", "svg");
        const svg = button.querySelector("svg");
        svg.style.backgroundColor = color;

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createProjectList;