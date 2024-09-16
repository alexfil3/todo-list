function Input(type, className, placeholder, event, handleEvent, id) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.classList.add(className);
    input.id = id;

    if (event) {
        input.addEventListener(event, handleEvent);
    }

    return input;
}

export default Input;