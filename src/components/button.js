function button(text, className) {
    const button = document.createElement("button");
    const svg = document.createElement("svg");
    const use = document.createElement("use");
    const p = document.createElement("p");
    
    p.textContent = text;
    button.classList.add(className);

    svg.appendChild(use);
    button.appendChild(svg);
    button.appendChild(p);

    return button
}

export default button;