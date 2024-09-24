import Div from "../components/Div";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
import showDateValue from "./showDateValue";
import closeTwoOfThreeSettingsList from "./closeTwoOfThreeSettingsLists";
import { isAfter, isBefore, isToday } from "date-fns";

function createDatePicker(date) {
    const div = Div("datepicker-toggle");
    const button = Button("datepicker-toggle-button", `${date ? date : "Due to"}`, "datepickerToggleButton", "../alien-svgrepo-com.svg", "svg");
    const label = Label("Date due to", "visually-hidden", "datepickerInput");
    const input = Input("date", "datepicker-input", "", "input", (e) => showDateValue(e, date), "datepickerInput");

    input.addEventListener("click", () => closeTwoOfThreeSettingsList(".priority-wrapper", ".priority-list", ".project-wrapper", ".project-list"));

    if (date) {
        if (isBefore(new Date(date), new Date())) {
            div.classList.add("red");
        }

        if (isAfter(new Date(date), new Date())) {
            div.classList.add("green");
        }

        if (isToday(new Date(date))) {
            div.classList.remove("red");
            div.classList.add("yellow");
        }
    }

    div.appendChild(button);
    div.appendChild(label);
    div.appendChild(input);

    return div;
}

export default createDatePicker;
