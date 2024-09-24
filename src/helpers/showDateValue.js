import { format, isAfter, isBefore, isToday } from "date-fns";

function showDateValue(e) {
    const datePicker = document.querySelector(".datepicker-toggle");
    const dateText = document.querySelector(".datepicker-toggle-button p");
    const currentDate = new Date();
    const chosenDate = e.target.value;
    let formattedChosenDate;
    
    if (chosenDate) {
        formattedChosenDate = format(chosenDate, "PPP");
    }
    
    if (isAfter(chosenDate, currentDate)) {
        datePicker.classList.add("green"); 
        datePicker.classList.remove("red"); 
        datePicker.classList.remove("yellow"); 
    }

    if (isBefore(chosenDate, currentDate)) {
        datePicker.classList.add("red"); 
        datePicker.classList.remove("green"); 
        datePicker.classList.remove("yellow"); 
    }

    if (isToday(chosenDate)) {
        datePicker.classList.add("yellow");
        datePicker.classList.remove("green"); 
        datePicker.classList.remove("red"); 
    }

    if (!chosenDate) {
        datePicker.classList.remove("yellow");
        datePicker.classList.remove("green"); 
        datePicker.classList.remove("red");
    }
    
    
    dateText.textContent = chosenDate ? formattedChosenDate : "Due to";
}

export default showDateValue;