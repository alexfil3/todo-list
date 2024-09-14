function Form(method, className) {
    const form = document.createElement("form");
    form.method = method;
    form.classList.add(className);

    return form;
}

export default Form;