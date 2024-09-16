import Div from "../components/Div";
import Button from "../components/Button";
import Label from "../components/Label";
import Input from "../components/Input";
import showDateValue from "./showDateValue";
import closeTwoOfThreeSettingsList from "./closeTwoOfThreeSettingsLists";

function createDatePicker() {
    const div = Div("datepicker-toggle");
    const button = Button("datepicker-toggle-button", "Due to", "datepickerToggleButton", "../alien-svgrepo-com.svg", "svg");
    const label = Label("Date due to", "visually-hidden", "datepickerInput");
    const input = Input("date", "datepicker-input", "", "input", showDateValue, "datepickerInput");

    input.addEventListener("click", () => closeTwoOfThreeSettingsList(".priority-wrapper", ".priority-list", ".project-wrapper", ".project-list"));

    div.appendChild(button);
    div.appendChild(label);
    div.appendChild(input);

    return div;
}

export default createDatePicker;
