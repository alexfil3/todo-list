import createOpenAsideBtn from "./createOpenAsideBtn";

const content = document.querySelector(".content");
const aside = document.querySelector(".aside");

function openAside() {
    const openAsideBtn = document.querySelector("#open-aside-btn");

    aside.classList.remove("close-aside");
    content.removeChild(openAsideBtn);
}

function closeAside() {
    aside.classList.add("close-aside");
    
    setTimeout(() => createOpenAsideBtn(), 300)
}

export {openAside, closeAside}