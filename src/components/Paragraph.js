function Paragraph(text, className) {
    const p = document.createElement("p");
    p.classList.add(className);
    p.textContent = text;

    return p;
}

export default Paragraph;