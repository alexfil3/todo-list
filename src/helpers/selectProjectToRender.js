import Project from "../pages/Project";

function selectProjectToRender(e) {
    const button = e.target.closest("button");
    const name = button.querySelector("p").textContent;
    const color = button.querySelector("svg").style.backgroundColor;
    
    Project(name, color, button.id)
}

export default selectProjectToRender;