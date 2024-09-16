import List from "../components/List";
import selectPriority from "./selectPriority";
import createPriorityList from "./createPriorityList";
import closeList from "./closeList";
import closeTwoOfThreeSettingsList from "./closeTwoOfThreeSettingsLists";

function togglePriorityList(e) {
    e.preventDefault();

    const priorityWrapper = document.querySelector(".priority-wrapper");
    const hasPriorityList = document.querySelector(".priority-list");

    if (hasPriorityList) {
        closeList(hasPriorityList, priorityWrapper);
    } else {
        const list = List("priority-list", selectPriority);
        const priorityList = createPriorityList(list, "priority-list-item", "priority-list-button");

        priorityWrapper.appendChild(priorityList);

        closeTwoOfThreeSettingsList(".project-wrapper", ".project-list");
    }
}

export default togglePriorityList;