import ListItem from "../components/ListItem";
import Button from "../components/Button";

const priorities = [
    { priority: "High", id: "high", color: "#cd1c18", },
    { priority: "Medium", id: "medium", color: "#ffde21", },
    { priority: "Low", id: "low", color: "#008000", },
    { priority: "No priority", id: "noPriority" },
];

function createPriorityList(list, listItemClassName, buttonClassName) {
     const listToAppend = list;

    priorities.forEach(({priority, id, color}) => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, priority, id, "../alien-svgrepo-com.svg", "svg");

        if (color) {
            button.style.color = color;
        }

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createPriorityList;