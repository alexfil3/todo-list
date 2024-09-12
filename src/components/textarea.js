function textarea(placeholder, className) {
    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.classList.add(className);

    return textarea;
}

export default textarea;