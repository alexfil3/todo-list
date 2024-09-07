import findItem from "./helpers/findItem";
import removeItem from "./helpers/removeItem";

function projectsList() {
    const projectsList = [];

    function getProjectsList() {
        return projectsList;
    }

    function addProject(project) {
        projectsList.push(project)
    }

    function removeProject(id) {
        removeItem(id, projectsList)
    }

    function getProjectById(projectId) {
        return findItem(projectId, projectsList)
    }

    function moveTodoItem(projectFrom, projectTo, todoItem) {
        projectTo.addTodoItem(todoItem)
        projectFrom.removeTodoItem(todoItem.getId())
    }

    return {
        getProjectsList,
        addProject,
        removeProject,
        getProjectById,
        moveTodoItem,
    }
}

export default projectsList;
