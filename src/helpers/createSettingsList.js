import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Div from "../components/Div";
import createDatePicker from "./createDatePicker";
import togglePriorityList from "./togglePriorityList";
import toggleProjectList from "./toggleProjectList";

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
            const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", togglePriorityList);
            priorityWrapper.appendChild(button);
            listItem.appendChild(priorityWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }

        if (settings[i].id === "project") {
            const projectWrapper = Div("project-wrapper");
            const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", toggleProjectList);
            projectWrapper.appendChild(button);
            listItem.appendChild(projectWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }
    }

    return listToAppend;
}

export default createSettingsList;