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
import editTask from "./editTask";

function createAddTaskDialog(title, description, date, priority, project, id) {
    const dialog = Dialog("add-task-dialog"); 
    const form = Form("dialog", "add-task-form");
    const taskNameLabel = Label("Task name", "visually-hidden", "taskNameInput");
    const taskNameInput = Input("text", "task-name-input", "Task name", "", "", "taskNameInput");
    const taskDescriptionLabel = Label("Description", "visually-hidden", "taskDescriptionTextarea");
    const taskDescriptionTextarea = Textarea("task-description-textarea", "Description", "taskDescriptionTextarea");
    const settingsList = List("settings-list");
    const createdList = createSettingsList(settingsList, "settings-list-item", "settings-list-button", date, priority, project);
    const addTaskButtonsWrapper = Div("add-task-buttons-wrapper");
    const cancelTaskButton = Button("cancel-task-button", "Cancel", "cancelTaskButton", "", "");
    let taskButton;
    if (title || description || date || priority || project) {
        taskButton = Button("dialog-add-task-button", "Edit task", "editTaskButton", "", "", () => editTask(id));
    } else {
        taskButton = Button("dialog-add-task-button", "Add task", "addTaskButton", "", "", submitTask);
    }

    if (title) {
        taskNameInput.value = title;
    }

    if (description) {
        taskDescriptionTextarea.value = description;
    }

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);
    form.appendChild(taskDescriptionLabel);
    form.appendChild(taskDescriptionTextarea);
    form.appendChild(createdList);
    addTaskButtonsWrapper.appendChild(cancelTaskButton);
    addTaskButtonsWrapper.appendChild(taskButton);
    form.appendChild(addTaskButtonsWrapper);
    dialog.appendChild(form);

    return dialog;
}

export default createAddTaskDialog;
