import closeList from "./closeList";

function selectColor(e) {
    e.preventDefault();

    const colorButton = document.querySelector("#colorButton");
    const buttonCircle = colorButton.querySelector("svg");
    const button = e.target.closest("button");
    const colorList = document.querySelector(".color-list");
    const colorWrapper = document.querySelector(".button-and-project-name-wrapper");

    buttonCircle.style.backgroundColor = button.id;

    closeList(colorList, colorWrapper);
}

export default selectColor;