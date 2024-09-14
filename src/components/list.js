function list(className) {
    const ul = document.createElement("ul");
    ul.classList.add(className);

    return ul;
}

export default list;