import List from "../components/List";
import selectColor from "./selectColor";
import closeList from "../helpers/closeList";
import createColorList from "./createColorList";

function toggleColorList(e) {
    e.preventDefault();

    const colorWrapper = document.querySelector(".button-and-project-name-wrapper");
    const hasColorList = document.querySelector(".color-list");

    if (hasColorList) {
        closeList(hasColorList, colorWrapper);
    } else {
        const list = List("color-list", selectColor);
        const colorList = createColorList(list, "color-list-item", "color-list-button");

        colorWrapper.appendChild(colorList);
    }
}

export default toggleColorList;