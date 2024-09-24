import Dialog from "../components/Dialog";
import Form from "../components/Form";
import Div from "../components/Div";
import Label from "../components/Label";
import Input from "../components/Input";
import Button from "../components/Button";
import toggleColorList from "./toggleColorList";
import submitProject from "./submitProject";

function createAddProjectDialog(editProject) {
    const projectDiv = document.querySelector(".project-div");
    let title;
    let color;
    if (projectDiv) {
        title = projectDiv.querySelector("h2") && projectDiv.querySelector("h2").textContent;
        color = projectDiv.querySelector("svg").style.backgroundColor;
    }
    const dialog = Dialog("add-project-dialog"); 
    const form = Form("dialog", "add-project-form");
    const buttonAndProjectNameWrapper = Div("button-and-project-name-wrapper");
    const colorButton = Button("color-button", "", "colorButton", "../alien-svgrepo-com.svg", "svg", toggleColorList);
    if (editProject) {
        const svgColor = colorButton.querySelector("svg");
        svgColor.style.backgroundColor = color;
    }
    const projectNameLabel = Label("Project name", "visually-hidden", "projectNameInput");
    const projectNameInput = Input("text", "project-name-input", "Project name", "", "", "projectNameInput");
    if (editProject) {
        projectNameInput.value = title;
    }
    const addProjectButtonsWrapper = Div("add-project-buttons-wrapper");
    const cancelProjectButton = Button("cancel-project-button", "Cancel", "cancelProjectButton", "", "");
    let projectButton;
    if (editProject) {
        projectButton = Button("dialog-add-project-button", "Edit project", "addProjectButton", "", "", editProject);
    } else {
        projectButton = Button("dialog-add-project-button", "Add project", "addProjectButton", "", "", submitProject);
    }

    buttonAndProjectNameWrapper.appendChild(colorButton);
    buttonAndProjectNameWrapper.appendChild(projectNameLabel);
    buttonAndProjectNameWrapper.appendChild(projectNameInput);
    form.appendChild(buttonAndProjectNameWrapper);
    addProjectButtonsWrapper.appendChild(cancelProjectButton);
    addProjectButtonsWrapper.appendChild(projectButton);
    form.appendChild(addProjectButtonsWrapper);
    dialog.appendChild(form);

    return dialog;
}

export default createAddProjectDialog;