function List(className, handleClick) {
    const ul = document.createElement("ul");
    ul.classList.add(className);

    if (handleClick) {
        ul.addEventListener("click", handleClick);
    }

    return ul;
}

export default List;