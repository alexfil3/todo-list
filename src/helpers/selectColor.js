import closeList from "./closeList";

function selectColor(e) {
    e.preventDefault();

    const colorButton = document.querySelector("#colorButton");
    const buttonCircle = colorButton.querySelector("svg");
    const button = e.target.closest("button");
    const colorList = document.querySelector(".color-list");
    const colorWrapper = document.querySelector(".button-and-project-name-wrapper");

    buttonCircle.style.backgroundColor = button.id;
    // const buttonCircle = colorButton.querySelector("svg");
    // console.log(buttonCircle)
    
    // if (!button) {
    //     return
    // }

    // switch (button.id) {
    //     case "high":
    //         priorityButton.classList.add("red");
    //         priorityButton.classList.remove("green");
    //         priorityButton.classList.remove("yellow");
    //         buttonText.textContent = "High";
    //         break;
    //     case "medium":
    //         priorityButton.classList.add("yellow");
    //         priorityButton.classList.remove("green");
    //         priorityButton.classList.remove("red");
    //         buttonText.textContent = "Medium";
    //         break;
    //     case "low":
    //         priorityButton.classList.add("green");
    //         priorityButton.classList.remove("red");
    //         priorityButton.classList.remove("yellow");
    //         buttonText.textContent = "Low";
    //         break;
    //     case "noPriority":
    //         priorityButton.classList.remove("red");
    //         priorityButton.classList.remove("green");
    //         priorityButton.classList.remove("yellow");
    //         buttonText.textContent = "No priority";
    //         break;
    //     default:
    //         return;
    // }

    closeList(colorList, colorWrapper);
}

export default selectColor;