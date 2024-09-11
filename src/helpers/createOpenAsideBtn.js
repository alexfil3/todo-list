import { openAside } from "../actionButtons/openCloseAside";

function createOpenAsideBtn() {
    const content = document.querySelector(".content");

    const button = document.createElement("button");
    const svg = document.createElement("svg");
    const use = document.createElement("use");

    button.id = "open-aside-btn";
    button.classList.add("open-aside-btn");

    svg.appendChild(use);
    button.appendChild(svg);

    content.appendChild(button);

    button.addEventListener("click", openAside)
}

export default createOpenAsideBtn;