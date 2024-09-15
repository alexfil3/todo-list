function createProjectList(list, listItemClassName, buttonClassName) {
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