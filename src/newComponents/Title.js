function Title(level, text, className) {
    const title = document.createElement(level);
    title.classList.add(className);
    title.textContent = text;

    return title;
}

export default Title;