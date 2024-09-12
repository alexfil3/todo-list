import buttonDate from "./button";
import inputDate from "./input";
import showDateValue from "../helpers/showDateValue";

function datepicker() {
    const outerSpan = document.createElement("span");
    const button = buttonDate("Due to", "datepicker-toggle-button");
    const input = inputDate("date");

    outerSpan.classList.add("datepicker-toggle");
    input.classList.add("datepicker-input");

    outerSpan.appendChild(button);
    outerSpan.appendChild(input);

    input.addEventListener("input", showDateValue)
    
    return outerSpan;
}

export default datepicker;
