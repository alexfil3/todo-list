import Dialog from "../components/Dialog";
import Form from "../components/Form";
import Label from "../components/Label";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import List from "../components/List";
import Div from "../components/Div";
import Button from "../components/Button";
import createSettingsList from "./createSettingsList";
import submitTask from "./submitTask";

function createAddTaskDialog() {
    const dialog = Dialog("add-task-dialog"); 
    const form = Form("dialog", "add-task-form");
    const taskNameLabel = Label("Task name", "visually-hidden", "taskNameInput");
    const taskNameInput = Input("text", "task-name-input", "Task name", "", "", "taskNameInput");
    const taskDescriptionLabel = Label("Description", "visually-hidden", "taskDescriptionTextarea");
    const taskDescriptionTextarea = Textarea("task-description-textarea", "Description", "taskDescriptionTextarea");
    const settingsList = List("settings-list");
    const createdList = createSettingsList(settingsList, "settings-list-item", "settings-list-button");
    const addTaskButtonsWrapper = Div("add-task-buttons-wrapper");
    const cancelTaskButton = Button("cancel-task-button", "Cancel", "cancelTaskButton", "", "");
    const addTaskButton = Button("dialog-add-task-button", "Add task", "addTaskButton", "", "", submitTask);

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
