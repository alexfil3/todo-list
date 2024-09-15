function Label(text, className) {
    const label = document.createElement("label");
    label.textContent = text;
    label.classList.add(className);

    return label;
}

export default Label;