import All from "../pages/All";
import renderProjects from "./renderProjects";

function deleteProject() {
    const allProjects = JSON.parse(localStorage.getItem("projects"));
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const id = document.querySelector(".project-div").id;
    const projectName = document.querySelector(".main-page-title").textContent;
    
    const remainProjects = allProjects.filter(project => project.id !== id);
    localStorage.setItem('projects', JSON.stringify(remainProjects));

    const remainTasks = allTasks.filter(task => task.project !== projectName);
    localStorage.setItem('tasks', JSON.stringify(remainTasks));

    All();
    renderProjects();
}

export default deleteProject;