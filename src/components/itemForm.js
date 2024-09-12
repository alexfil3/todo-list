import div from "./div";
import input from "./input";
import label from "./label";
import textarea from "./textarea";
import datepicker from "./datepicker";
import paragraph from "./paragraph";
import button from "./button";

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
    const priority = paragraph("Priority", "settings-item");
    const project = paragraph("Project", "settings-item");

    const div4 = div();
    const cancelButton = button("Cancel");
    const addButton = button("Add task");

    div1.appendChild(labelName);
    div1.appendChild(inputName);

    div2.appendChild(labelDescription);
    div2.appendChild(inputDescription);

    div3.appendChild(dateInput);
    div3.appendChild(priority);
    div3.appendChild(project);

    div4.appendChild(cancelButton);
    div4.appendChild(addButton);

    form.appendChild(div1);
    form.appendChild(div2);
    form.appendChild(div3);
    form.appendChild(div4);

    return form;
}

export default itemForm;