function input(type, placeholder, className) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(className);

    return input;
}

export default input;