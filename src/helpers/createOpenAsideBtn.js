import Button from "../newComponents/Button";
import { openAside } from "./openCloseAside";

function createOpenAsideBtn() {
    const main = document.querySelector(".main");
    const button = Button("open-aside", "", "openAside", "../alien-svgrepo-com.svg", "svg", openAside)

    main.appendChild(button);
}

export default createOpenAsideBtn;