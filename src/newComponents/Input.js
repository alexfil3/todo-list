function Input(type, className, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(className);

    return input;
}

export default Input;