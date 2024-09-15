import Div from "../newComponents/Div";
import Button from "../newComponents/Button";
import Input from "../newComponents/Input";
import showDateValue from "./showDateValue";

function createDatePicker() {
    const div = Div("datepicker-toggle");
    const button = Button("datepicker-toggle-button", "Due to", "datepickerToggleButton", "../alien-svgrepo-com.svg", "svg");
    const input = Input("date", "datepicker-input", "", "input", showDateValue);

    div.appendChild(button);
    div.appendChild(input);

    return div;
}

export default createDatePicker;
