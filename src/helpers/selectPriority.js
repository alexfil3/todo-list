import closeList from "./closeList";

function selectPriority(e) {
    e.preventDefault();

    const priorityButton = document.querySelector("#priority");
    const button = e.target.closest("button");
    const buttonText = priorityButton.querySelector("p");
    const priorityList = document.querySelector(".priority-list");
    const priorityWrapper = document.querySelector(".priority-wrapper");
    
    if (!button) {
        return
    }

    switch (button.id) {
        case "high":
            priorityButton.classList.add("red");
            priorityButton.classList.remove("green");
            priorityButton.classList.remove("yellow");
            buttonText.textContent = "High";
            break;
        case "medium":
            priorityButton.classList.add("yellow");
            priorityButton.classList.remove("green");
            priorityButton.classList.remove("red");
            buttonText.textContent = "Medium";
            break;
        case "low":
            priorityButton.classList.add("green");
            priorityButton.classList.remove("red");
            priorityButton.classList.remove("yellow");
            buttonText.textContent = "Low";
            break;
        case "noPriority":
            priorityButton.classList.remove("red");
            priorityButton.classList.remove("green");
            priorityButton.classList.remove("yellow");
            buttonText.textContent = "No priority";
            break;
        default:
            return;
    }

    closeList(priorityList, priorityWrapper);
}

export default selectPriority;