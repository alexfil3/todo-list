import ListItem from "../components/ListItem";
import Button from "../components/Button";

const colors = [
    { color: "#dc2626" },
    { color: "#ea580c" },
    { color: "#d97706" },
    { color: "#ca8a04" },
    { color: "#65a30d" },
    { color: "#16a34a" },
    { color: "#059669" },
    { color: "#0d9488" },
    { color: "#0891b2" },
    { color: "#0284c7" },
    { color: "#2563eb" },
    { color: "#4f46e5" },
]

function createColorList(list, listItemClassName, buttonClassName) { 
    const listToAppend = list;

    colors.forEach(({color}) => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, "", color, "../alien-svgrepo-com.svg", "svg");
        const svg = button.querySelector("svg");
        svg.style.backgroundColor = color;

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createColorList;