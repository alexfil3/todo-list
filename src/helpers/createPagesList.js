import ListItem from "../components/ListItem";
import Button from "../components/Button";

const pages = [
    { name: "All", svg: document.querySelector("#books") },
    {name: "Today", svg: document.querySelector("#star")},
    { name: "Upcoming", svg: document.querySelector("#calendar") },
    { name: "Completed", svg: document.querySelector("#completed") },
    { name: "Notes", svg: document.querySelector("#note") },
];

function createPagesList(list, listItemClassName, buttonClassName) {
    const listToAppend = list;

    pages.forEach(page => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, page.name, page.name, "", "svg");
        button.insertBefore(page.svg, button.firstChild);

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createPagesList;