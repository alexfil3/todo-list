function selectProject(e) {
    e.preventDefault();

    const projectButton = document.querySelector("#project");
    const button = e.target.closest("button");
    const buttonText = projectButton.querySelector("p");
    
    if (!button) {
        return
    }

    if (button.id === "noProject") {
        
    }

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
}

export default selectProject;