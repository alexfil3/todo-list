function Textarea(className, placeholder) {
    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.classList.add(className);

    return textarea;
}

export default Textarea;