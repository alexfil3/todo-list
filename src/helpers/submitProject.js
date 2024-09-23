import createProject from "../managers/project";
import addProjectToLocalStorage from "./addProjectToLocalStorage";
import renderProjects from "./renderProjects";

function submitProject() {
    const title = document.querySelector("#projectNameInput").value;
    const color = document.querySelector("#colorButton svg").style.backgroundColor;
    const newProject = createProject(title, color);

    const project = {
        id: newProject.getId(),
        title: newProject.getName(),
        color: newProject.getColor(),
    }
    

    addProjectToLocalStorage(project);
    renderProjects();
}

export default submitProject;