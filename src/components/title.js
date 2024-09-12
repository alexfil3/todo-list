function title(text, classList) {
    const title = document.createElement("h2");
    title.textContent = text;
    title.classList.add(classList);

    return title;
}

export default title;