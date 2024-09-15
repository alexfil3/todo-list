import List from "../components/List";
import selectProject from "./selectProject";

function showProjectList(e) {
    e.preventDefault();

    const projectWrapper = document.querySelector(".project-wrapper");
    const list = List("priority-list", selectProject);
    const priorityList = createProjectList(list, "priority-list-item", "priority-list-button");

    projectWrapper.appendChild(priorityList);
}

export default showProjectList;