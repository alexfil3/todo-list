import list from "./list";
import listItem from "./listItem";
import buttonPriority from "./button";
import handlePriorityClick from "../helpers/handlePriorityClick";

const priority = [
    { name: "High", color: "red" },
    { name: "Medium", color: "orange" },
    { name: "Low", color: "green" },
    { name: "No priority", color: ""},
]

function priorityList() {
    const ul = list("settings-list1");

    priority.forEach(item => {
        const li = listItem();
        const button = buttonPriority(item.name, "settings-list-item");
        button.style.color = item.color;
        button.id = item.name;

        li.appendChild(button);
        ul.appendChild(li);
    })

    ul.addEventListener("click", handlePriorityClick)

    return ul;
}

export default priorityList;