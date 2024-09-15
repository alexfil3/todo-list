import Dialog from "../newComponents/Dialog";
import Form from "../newComponents/Form";
import Label from "../newComponents/Label";
import Input from "../newComponents/Input";
import Textarea from "../newComponents/Textarea";
import List from "../newComponents/List";
import Div from "../newComponents/Div";
import Button from "../newComponents/Button";
import createSettingsList from "./createSettingsList";

function createAddTaskDialog() {
    const dialog = Dialog("add-task-dialog"); 
    const form = Form("dialog", "add-task-form");
    const taskNameLabel = Label("Task name", "visually-hidden");
    const taskNameInput = Input("text", "task-name-input", "Task name");
    const taskDescriptionLabel = Label("Description", "visually-hidden");
    const taskDescriptionTextarea = Textarea("task-description-textarea", "Description");
    const settingsList = List("settings-list", () => console.log("hello"));
    const createdList = createSettingsList(settingsList, "settings-list-item", "settings-list-button");
    const addTaskButtonsWrapper = Div("add-task-buttons-wrapper");
    const cancelTaskButton = Button("cancel-task-button", "Cancel", "cancelTaskButton", "", "", () => console.log("cancel"));
    const addTaskButton = Button("dialog-add-task-button", "Add task", "addTaskButton", "", "", () => console.log("add"));

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);
    form.appendChild(taskDescriptionLabel);
    form.appendChild(taskDescriptionTextarea);
    form.appendChild(createdList);
    addTaskButtonsWrapper.appendChild(cancelTaskButton);
    addTaskButtonsWrapper.appendChild(addTaskButton);
    form.appendChild(addTaskButtonsWrapper);
    dialog.appendChild(form);

    return dialog;
}

export default createAddTaskDialog;