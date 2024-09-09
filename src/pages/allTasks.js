function allTasks() {
    const content = document.querySelector("#content");

    const div = document.createElement("div");
    div.classList.add("content-inner")

    const title = document.createElement("h2");
    title.textContent = "All Tasks";
    
    const button = document.createElement("button");
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    const text = document.createElement("p");
    text.textContent = "Add task";

    div.appendChild(title);
    svg.appendChild(use);
    button.appendChild(svg);
    button.appendChild(text);
    div.appendChild(button);
    
    content.appendChild(div);
}

export default allTasks;