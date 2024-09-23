function addProjectToLocalStorage(project) {
    let projects = [];
    projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.unshift(project);
    localStorage.setItem('projects', JSON.stringify(projects));
}

export default addProjectToLocalStorage;