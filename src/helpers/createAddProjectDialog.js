import Dialog from "../components/Dialog";
import Form from "../components/Form";
import Label from "../components/Label";
import Input from "../components/Input";
import List from "../components/List";
import Div from "../components/Div";
import Button from "../components/Button";
import createSettingsList from "./createSettingsList";

function createAddProjectDialog() {
    const dialog = Dialog("add-project-dialog"); 
    const form = Form("dialog", "add-project-form");
    const projectNameLabel = Label("Project name", "visually-hidden", "projectNameInput");
    const projectNameInput = Input("text", "project-name-input", "Project name", "projectNameInput");
    // const settingsList = List("settings-list");
    // const createdList = createSettingsList(settingsList, "settings-list-item", "settings-list-button");
    // const addTaskButtonsWrapper = Div("add-task-buttons-wrapper");
    // const cancelTaskButton = Button("cancel-task-button", "Cancel", "cancelTaskButton", "", "", () => console.log("cancel"));
    // const addTaskButton = Button("dialog-add-task-button", "Add task", "addTaskButton", "", "", () => console.log("add"));

    form.appendChild(projectNameLabel);
    // form.appendChild(taskNameInput);
    // form.appendChild(taskDescriptionLabel);
    // form.appendChild(taskDescriptionTextarea);
    // form.appendChild(createdList);
    // addTaskButtonsWrapper.appendChild(cancelTaskButton);
    // addTaskButtonsWrapper.appendChild(addTaskButton);
    // form.appendChild(addTaskButtonsWrapper);
    // dialog.appendChild(form);

    return dialog;
}

export default createAddProjectDialog;