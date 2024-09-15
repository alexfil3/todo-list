import ListItem from "../newComponents/ListItem";
import Button from "../newComponents/Button";

const pages = ["All", "Today", "Upcoming", "Completed", "Notes"];

function createPagesList(list, listItemClassName, buttonClassName) {
    const listToAppend = list;

    pages.forEach(page => {
        const listItem = ListItem(listItemClassName);
        const button = Button(buttonClassName, page, page, "../alien-svgrepo-com.svg", "svg");

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    })

    return listToAppend;
}

export default createPagesList;