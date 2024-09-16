import ListItem from "../components/ListItem";
import Button from "../components/Button";

const projects = [{ name: "No project", id: "noProject" },];

function createProjectList(list, listItemClassName, buttonClassName) {
    const listToAppend = list;

    projects.forEach(({name, id}) => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, name, id, "../alien-svgrepo-com.svg", "svg");

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createProjectList;