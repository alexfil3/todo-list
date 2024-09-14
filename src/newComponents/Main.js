function Main(className, id) {
    const main = document.createElement("main");
    main.classList.add(className);
    main.id = id;

    return main;
}

export default Main;