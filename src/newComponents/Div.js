function Div(className, id) {
    const div = document.createElement("div");
    div.classList.add(className);
    div.id = id;

    return div;
}

export default Div;