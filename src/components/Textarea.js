function Textarea(className, placeholder, id) {
    const textarea = document.createElement("textarea");
    textarea.placeholder = placeholder;
    textarea.classList.add(className);
    textarea.id = id;

    return textarea;
}

export default Textarea;