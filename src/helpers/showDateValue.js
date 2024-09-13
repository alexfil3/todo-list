import { format, isAfter, isBefore, isToday } from "date-fns";

function showDateValue(e) {
    const datePicker = document.querySelector(".datepicker-toggle");
    const dateText = document.querySelector(".datepicker-toggle-button p");
    const date = e.target.value;
    const result = format(date, "PPP");
    const today = new Date();
    
    if (isAfter(date, today)) {
        datePicker.classList.add("green"); 
        datePicker.classList.remove("red"); 
        datePicker.classList.remove("yellow"); 
    }

    if (isBefore(date, today)) {
        datePicker.classList.add("red"); 
        datePicker.classList.remove("green"); 
        datePicker.classList.remove("yellow"); 
    }

    if (isToday(date)) {
        datePicker.classList.add("yellow");
        datePicker.classList.remove("green"); 
        datePicker.classList.remove("red"); 
    }
    
    
    dateText.textContent = date ? result : "Due to";
}

export default showDateValue;