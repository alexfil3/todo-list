function label(text) {
    const label = document.createElement("label");
    label.textContent = text;
    label.classList.add("visually-hidden");

    return label;
}

export default label;