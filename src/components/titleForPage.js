function titleForPage(text) {
    const title = document.createElement("h2");
    title.textContent = text;
    title.classList.add("main-title");

    return title;
}

export default titleForPage;