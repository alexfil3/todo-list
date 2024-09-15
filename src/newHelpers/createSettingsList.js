import ListItem from "../newComponents/ListItem";
import Button from "../newComponents/Button";
import Div from "../newComponents/Div";
import createDatePicker from "./createDatePicker";
import showPriorityList from "./showPriorityList";
import showProjectList from "./showProjectList";

const settings = [{text: "Due date", id: "date"}, {text: "No priority", id: "priority"}, {text: "Project", id: "project"},];

function createSettingsList(list, listItemClassName, buttonClassName) {
    const listToAppend = list;

    for (let i = 0; i < settings.length; i++) {
         const listItem = ListItem(listItemClassName);

        if (settings[i].id === "date") {
            const datepicker = createDatePicker();
            listItem.appendChild(datepicker);
            listToAppend.appendChild(listItem);
            continue;
        }

        if (settings[i].id === "priority") {
            const priorityWrapper = Div("priority-wrapper");
            const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", showPriorityList);
            priorityWrapper.appendChild(button);
            listItem.appendChild(priorityWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }

        if (settings[i].id === "project") {
            const projectWrapper = Div("project-wrapper");
            const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", showProjectList);
            projectWrapper.appendChild(button);
            listItem.appendChild(projectWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }

        const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", () => console.log("loook"));

        listItem.appendChild(button);
        listToAppend.appendChild(listItem);
    }

    return listToAppend;
}

export default createSettingsList;