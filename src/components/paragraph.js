function paragraph(text, className) {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add(className);

    return p
}

export default paragraph;