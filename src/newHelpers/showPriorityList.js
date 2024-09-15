import List from "../newComponents/List";
import createPriorityList from "./createPriorityList";
import selectPriority from "./selectPriority";

function showPriorityList(e) {
    e.preventDefault();

    const priorityWrapper = document.querySelector(".priority-wrapper");
    const list = List("priority-list", selectPriority);
    const priorityList = createPriorityList(list, "priority-list-item", "priority-list-button");

    priorityWrapper.appendChild(priorityList);
}

export default showPriorityList;