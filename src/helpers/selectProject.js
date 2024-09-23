import closeList from "./closeList";

function selectProject(e) {
    e.preventDefault();

    const projectButton = document.querySelector("#project");
    const button = e.target.closest("button");

    if (!button) {
        return
    }
    
    const text = button.querySelector("p").textContent;
    const color = button.querySelector("svg").style.backgroundColor;
    const buttonText = projectButton.querySelector("p");
    const svg = projectButton.querySelector("svg");
    const projectList = document.querySelector(".project-list");
    const projectWrapper = document.querySelector(".project-wrapper");

    buttonText.textContent = text;

    if (color) {
        projectButton.style.borderColor = color;
        projectButton.style.borderWidth = "2px";
        svg.style.backgroundColor = color;
    } else {
        projectButton.style.borderColor = color;
        projectButton.style.borderWidth = "1px";
        svg.style.backgroundColor = color;
    }
    

    closeList(projectList, projectWrapper);
}

export default selectProject;