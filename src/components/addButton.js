function addButton(text) {
    const button = document.createElement("button");
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    const p = document.createElement("p");
    p.textContent = text;
    button.classList.add("main-add-task-btn")

    svg.appendChild(use);
    button.appendChild(svg);
    button.appendChild(p);

    return button
}

export default addButton;