import div from "./div";
import input from "./input";
import label from "./label";
import textarea from "./textarea";
import datepicker from "./datepicker";
import button from "./button";
import priorityList from "../components/priorityList";
import showPriorityList from "../helpers/showPriorityList";

function itemForm() {
    const form = document.createElement("form");
    form.setAttribute("method", "dialog");

    const div1 = div();
    const labelName = label("Task name");
    const inputName = input("text", "Task name", "input-name");

    const div2 = div();
    const labelDescription = label("Description");
    const inputDescription = textarea("Description", "textarea-description");

    const div3 = div("item-settings");
    const dateInput = datepicker();
    const div5 = div("priority-wrapper");
    const div6 = div("project-wrapper");
    const priority = button("Priority", "settings-item1");
    const project = button("Project", "settings-item2");
    const priorityListEl = priorityList();

    const div4 = div();
    const cancelButton = button("Cancel");
    const addButton = button("Add task");

    div1.appendChild(labelName);
    div1.appendChild(inputName);

    div2.appendChild(labelDescription);
    div2.appendChild(inputDescription);

    div3.appendChild(dateInput);
    div5.appendChild(priority);
    div5.appendChild(priorityListEl);
    div6.appendChild(project);
    div3.appendChild(div5);
    div3.appendChild(div6);

    div4.appendChild(cancelButton);
    div4.appendChild(addButton);

    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);

    priority.addEventListener("click", showPriorityList);

    return form;
}

export default itemForm;