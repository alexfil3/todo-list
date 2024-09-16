import closeList from "./closeList";

function selectProject(e) {
    e.preventDefault();

    const projectButton = document.querySelector("#project");
    const button = e.target.closest("button");
    const buttonText = projectButton.querySelector("p");
    const projectList = document.querySelector(".project-list");
    const projectWrapper = document.querySelector(".project-wrapper");
    
    if (!button) {
        return
    }

    if (button.id === "noProject") {
        buttonText.textContent = "Project";
    }

    closeList(projectList, projectWrapper);
}

export default selectProject;