import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Div from "../components/Div";
import createDatePicker from "./createDatePicker";
import togglePriorityList from "./togglePriorityList";
import toggleProjectList from "./toggleProjectList";

const settings = [{text: "Due date", id: "date"}, {text: "No priority", id: "priority"}, {text: "No project", id: "project"},];

function createSettingsList(list, listItemClassName, buttonClassName, date, priority, project) {
    const listToAppend = list;

    for (let i = 0; i < settings.length; i++) {
         const listItem = ListItem(listItemClassName);

        if (settings[i].id === "date") {
            const datepicker = createDatePicker(date);
            listItem.appendChild(datepicker);
            listToAppend.appendChild(listItem);
            continue;
        }

        if (settings[i].id === "priority") {
            const priorityWrapper = Div("priority-wrapper");
            const button = Button(buttonClassName, settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", togglePriorityList);
            const p = button.querySelector("p");
            switch (priority) {
                case "High":
                    button.classList.add("red");
                    button.classList.remove("green");
                    button.classList.remove("yellow");
                    p.textContent = "High";
                    break;
                case "Medium":
                    button.classList.add("yellow");
                    button.classList.remove("green");
                    button.classList.remove("red");
                    p.textContent = "Medium";
                    break;
                case "low":
                    button.classList.add("green");
                    button.classList.remove("red");
                    button.classList.remove("yellow");
                    p.textContent = "Low";
                    break;
                case "noPriority":
                    button.classList.remove("red");
                    button.classList.remove("green");
                    button.classList.remove("yellow");
                    p.textContent = "No priority";
                    break;
                default:
                    break;
            }

            priorityWrapper.appendChild(button);
            listItem.appendChild(priorityWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }

        if (settings[i].id === "project") {
            const projectWrapper = Div("project-wrapper");
            const button = Button(buttonClassName, project ? project : settings[i].text, settings[i].id, "../alien-svgrepo-com.svg", "svg", toggleProjectList);
            const svg = button.querySelector("svg");
            if (project) {
                const list = document.querySelector(".projects-list");
                const projectNameList = [...list.querySelectorAll("p")];
                const projectColorList = [...list.querySelectorAll("svg")];
                let color;
                for (let i = 0; i < projectNameList.length; i++) {
                    if (projectNameList[i].textContent === project) {
                        color = projectColorList[i].style.backgroundColor;
                    }
                }
                button.style.borderColor = color;
                button.style.borderWidth = "2px";
                svg.style.backgroundColor = color;
            }
            projectWrapper.appendChild(button);
            listItem.appendChild(projectWrapper);
            listToAppend.appendChild(listItem);
            continue;
        }
    }

    return listToAppend;
}

export default createSettingsList;
// 