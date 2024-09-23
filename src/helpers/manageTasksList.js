function manageTasksList(e) { 
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    const button = e.target.closest("button");
    if (!button) {
        return;
    }
    const taskId = e.target.closest("li");
    console.log(e.target.closest("button"))
    console.log(e.target.closest("li"))

    if (button.id === "completedButton") {
        const taskToDelete = allTasks.findIndex(({id}) => id === taskId);
        allTasks.splice(taskToDelete, 1);
    }

    if (button.id === "deleteButton") { }

    if (button.id === "editButton") {}
}

export default manageTasksList;