function Label(text, className, forId) {
    const label = document.createElement("label");
    label.textContent = text;
    label.classList.add(className);
    label.setAttribute("for", forId);

    return label;
}

export default Label;