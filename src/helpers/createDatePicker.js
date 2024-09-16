import Div from "../components/Div";
import Button from "../components/Button";
import Input from "../components/Input";
import showDateValue from "./showDateValue";
import closeTwoOfThreeSettingsList from "./closeTwoOfThreeSettingsLists";

function createDatePicker() {
    const div = Div("datepicker-toggle");
    const button = Button("datepicker-toggle-button", "Due to", "datepickerToggleButton", "../alien-svgrepo-com.svg", "svg");
    const input = Input("date", "datepicker-input", "", "input", showDateValue);

    input.addEventListener("click", () => closeTwoOfThreeSettingsList(".priority-wrapper", ".priority-list", ".project-wrapper", ".project-list"));

    div.appendChild(button);
    div.appendChild(input);

    return div;
}

export default createDatePicker;
