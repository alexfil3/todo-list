import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Div from "../components/Div";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import { isToday, isAfter, isBefore } from "date-fns";

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
        const todayTasks = allTasks.filter(({ dueDate }) => isToday(new Date(dueDate)))
        tasksToRender.push(...todayTasks);
        list = document.querySelector(".today-tasks-list");
        list.textContent = "";
    }

    if (document.querySelector(".upcoming-tasks-list")) {
        const upcomingTasks = allTasks.filter(({ dueDate }) => isAfter(new Date(dueDate), new Date()))
        tasksToRender.push(...upcomingTasks);
        console.log(upcomingTasks)
        list = document.querySelector(".upcoming-tasks-list");
        list.textContent = "";
    }

        tasksToRender.forEach(({title, description, dueDate, priority, project}) => {
            const li = ListItem("tasks-list-item");
            const completedButton = Button("completed-button", "", "completedButton", "../alien-svgrepo-com.svg", "svg");
            const titleDescriptionDueDateWrapper = Div("title-description-due-date-wrapper");
            const taskTitle = Title("h3", title, "task-title");
            let taskDescription;
            if (description) {
                taskDescription = Paragraph(description, "task-description");
            }
            let taskDueDate;
            if (dueDate) {
                taskDueDate = Paragraph(dueDate, "task-due-date");
                let color;
                const date = new Date(dueDate);
                const currentDate = new Date();
                if (isAfter(date, currentDate)) {
                    color = "green-text";
                }
                if (isBefore(date, currentDate)) {
                    color = "red-text";
                }
                if (isToday(date)) {
                    color = "yellow-text";
                }
                taskDueDate.classList.add(color);
            }
            const manageAndProjectWrapper = Div("manage-and-project-wrapper");
            const editButtonsWrapper = Div("edit-buttons-wrapper");
            const editButton = Button("edit-button", "", "editButton", "../alien-svgrepo-com.svg", "svg");
            const deleteButton = Button("delete-button", "", "deleteButton", "../alien-svgrepo-com.svg", "svg");
            let taskPriority;
            if (priority) {
                taskPriority = Paragraph(priority, "task-priority");
                let color;
                switch (priority) {
                    case "High":
                        color = "red-text";
                        break;
                    case "Medium":
                        color = "yellow-text";
                        break;
                    case "Low":
                        color = "green-color";
                        break;
                    default:
                        break;
                }
                taskPriority.classList.add(color)
            }
            const taskProject = Paragraph(project, "task-project");

            editButtonsWrapper.appendChild(editButton);
            editButtonsWrapper.appendChild(deleteButton);
            manageAndProjectWrapper.appendChild(editButtonsWrapper);
            if (priority) {
                manageAndProjectWrapper.appendChild(taskPriority);
            }
            manageAndProjectWrapper.appendChild(taskProject);

            titleDescriptionDueDateWrapper.appendChild(taskTitle);
            if (description) {
                titleDescriptionDueDateWrapper.appendChild(taskDescription);
            }
            if (dueDate) {
                titleDescriptionDueDateWrapper.appendChild(taskDueDate);
            }

            li.appendChild(completedButton);
            li.appendChild(titleDescriptionDueDateWrapper);
            li.appendChild(manageAndProjectWrapper);

            list.appendChild(li);
        });
}

export default renderTasks;