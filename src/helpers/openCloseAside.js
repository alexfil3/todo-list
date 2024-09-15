import createOpenAsideBtn from "./createOpenAsideBtn";

function openAside() {
    const openAside = document.querySelector("#openAside");
    const main = document.querySelector(".main");
    const aside = document.querySelector(".aside");
    aside.classList.remove("close-aside");
    main.removeChild(openAside);
}

function closeAside() {
    const aside = document.querySelector(".aside");
    aside.classList.add("close-aside");
    
    setTimeout(() => createOpenAsideBtn(), 300)
}

export { openAside, closeAside };