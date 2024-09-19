import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Div from "../components/Div";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { isToday } from "date-fns";

function renderTasks() {
    const allTasks = JSON.parse(localStorage.getItem("tasks"));
    let tasksToRender = [];
    let list;

    if (document.querySelector(".all-tasks-list")) {
        tasksToRender.push(...allTasks);
        list = document.querySelector(".all-tasks-list");
        list.textContent = "";
    }

    if (document.querySelector(".completed-tasks-list")) {
        tasksToRender.push(...allTasks);
        list = document.querySelector(".completed-tasks-list");
        list.textContent = "";
    }

    if (document.querySelector(".today-tasks-list")) {
        const todayTasks = allTasks.filter(({ dueDate }) => {
            isToday(new Date(dueDate));
        })
        console.log(todayTasks)
        tasksToRender.push(...todayTasks);
        list = document.querySelector(".today-tasks-list");
        list.textContent = "";
    }

        tasksToRender.forEach(task => {
            const li = ListItem("tasks-list-item");
            const completedButton = Button("completed-button", "", "completedButton", "../alien-svgrepo-com.svg", "svg");
            const titleAndDescriptionWrapper = Div("title-and-description-wrapper");
            const title = Title("h3", task.title, "task-title");
            const description = Paragraph(task.description, "task-description");
            const manageAndProjectWrapper = Div("manage-and-project-wrapper");
            const editButtonsWrapper = Div("edit-buttons-wrapper");
            const editButton = Button("edit-button", "", "editButton", "../alien-svgrepo-com.svg", "svg");
            const deleteButton = Button("delete-button", "", "deleteButton", "../alien-svgrepo-com.svg", "svg");
            const project = Paragraph(task.project, "task-project");

            editButtonsWrapper.appendChild(editButton);
            editButtonsWrapper.appendChild(deleteButton);
            manageAndProjectWrapper.appendChild(editButtonsWrapper);
            manageAndProjectWrapper.appendChild(project);

            titleAndDescriptionWrapper.appendChild(title);
            titleAndDescriptionWrapper.appendChild(description);

            li.appendChild(completedButton);
            li.appendChild(titleAndDescriptionWrapper);
            li.appendChild(manageAndProjectWrapper);

            list.appendChild(li);
        });
}

export default renderTasks;