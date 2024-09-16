import List from "../components/List";
import selectProject from "./selectProject";
import createProjectList from "./createProjectList";
import closeList from "./closeList";
import closeTwoOfThreeSettingsList from "./closeTwoOfThreeSettingsLists";

function toggleProjectList(e) {
    e.preventDefault();

    const projectWrapper = document.querySelector(".project-wrapper");
    const hasProjectList = document.querySelector(".project-list");

    if (hasProjectList) {
        closeList(hasProjectList, projectWrapper);
    } else {
        const list = List("project-list", selectProject);
        const projectList = createProjectList(list, "project-list-item", "project-list-button");

        projectWrapper.appendChild(projectList);

        closeTwoOfThreeSettingsList(".priority-wrapper", ".priority-list");
    }
}

export default toggleProjectList;