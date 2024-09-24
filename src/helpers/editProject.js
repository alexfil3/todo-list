import Project from "../pages/Project";
import renderProjects from "./renderProjects";
import renderTasks from "./renderTasks";

function editProject() {
    const title = document.querySelector("#projectNameInput").value;
    const button = document.querySelector("#colorButton");
    const svg = button.querySelector("svg").style.backgroundColor;
    const id = document.querySelector(".project-div").id;
    const projectName = document.querySelector("h2").textContent;
    
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = tasks.map(task => {
        if (task.project === projectName) {
            task.project = title;
        }

        return task;
    });

    const projects = JSON.parse(localStorage.getItem("projects"));
    const newProjects = projects.map(project => {
        if (project.id === id) {
            project.title = title;
            project.color = svg;
        }

        return project;
    });

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    localStorage.setItem('projects', JSON.stringify(newProjects));

    renderProjects();

    Project(title, svg, id);

    // const projectDiv = document.querySelector(".project-div h2");
    // renderTasks(projectDiv && projectDiv.textContent);
}

export default editProject;