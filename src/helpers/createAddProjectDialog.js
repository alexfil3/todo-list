import Dialog from "../components/Dialog";
import Form from "../components/Form";
import Div from "../components/Div";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import toggleColorList from "./toggleColorList";
import submitProject from "./submitProject";

function createAddProjectDialog() {
    const dialog = Dialog("add-project-dialog"); 
    const form = Form("dialog", "add-project-form");
    const buttonAndProjectNameWrapper = Div("button-and-project-name-wrapper");
    const colorButton = Button("color-button", "", "colorButton", "../alien-svgrepo-com.svg", "svg", toggleColorList);
    const projectNameLabel = Label("Project name", "visually-hidden", "projectNameInput");
    const projectNameInput = Input("text", "project-name-input", "Project name", "", "", "projectNameInput");
    const addProjectButtonsWrapper = Div("add-project-buttons-wrapper");
    const cancelProjectButton = Button("cancel-project-button", "Cancel", "cancelProjectButton", "", "");
    const addProjectButton = Button("dialog-add-project-button", "Add project", "addProjectButton", "", "", submitProject);

    buttonAndProjectNameWrapper.appendChild(colorButton);
    buttonAndProjectNameWrapper.appendChild(projectNameLabel);
    buttonAndProjectNameWrapper.appendChild(projectNameInput);
    form.appendChild(buttonAndProjectNameWrapper);
    addProjectButtonsWrapper.appendChild(cancelProjectButton);
    addProjectButtonsWrapper.appendChild(addProjectButton);
    form.appendChild(addProjectButtonsWrapper);
    dialog.appendChild(form);

    return dialog;
}

export default createAddProjectDialog;