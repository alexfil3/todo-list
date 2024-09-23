import Aside from "../components/Aside";
import Main from "../components/Main";
import Header from "../components/Header";
import Div from "../components/Div";
import Title from "../components/Title";
import Button from "../components/Button";
import List from "../components/List";
import createPagesList from "../helpers/createPagesList";
import loadPage from "../helpers/loadPage";
import { closeAside } from "../helpers/openCloseAside";
import openDialog from "../helpers/openDialog";
import createAddTaskDialog from "../helpers/createAddTaskDialog";
import createAddProjectDialog from "../helpers/createAddProjectDialog";
import renderProjects from "../helpers/renderProjects";
import selectProjectToRender from "../helpers/selectProjectToRender";

function Layout() {
    const container = document.querySelector("#container");
    const aside = Aside("aside");
    const headerAndMainWrapper = Div("header-and-main-wrapper");
    const header = Header("header");
    const main = Main("main", "main");

    // create block with title and buttons
    const mainTitleAndButtonsWrapper = Div("main-title-and-buttons-wrapper");
    const mainTitle = Title("h1", "Todo List", "main-title");
    const buttonsWrapper = Div("buttons-wrapper");
    const themeButton = Button("theme-button", "", "themeButton", "../alien-svgrepo-com.svg", "svg");
    const closeButton = Button("close-aside-button", "", "closeAsideButton", "../alien-svgrepo-com.svg", "svg", closeAside);

    // create block with add task button and list of different sort of tasks
    const addTaskAndPagesWrapper = Div("add-task-and-pages-wrapper");
    const addTaskButton = Button("add-task-button", "Add task", "addTask", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddTaskDialog));
    const pagesList = List("pages-list", loadPage);
    const createdList = createPagesList(pagesList, "pages-list-item", "pages-list-button");

    // create block with project title and button to add a project
    const projectAddButtonAndProjectListWrapper = Div("project-add-button-and-project-list-wrapper");
    const projectAddButton = Button("project-add-button", "Projects", "projectAddButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddProjectDialog));
    const projectList = List("projects-list", selectProjectToRender);

    // create two buttons for header
    const headerButtonsWrapper = Div("header-buttons-wrapper"); 
    const changeProjectButton = Button("header-button-change", "", "headerButtonChange", "../alien-svgrepo-com.svg", "svg");
    const deleteProjectButton = Button("header-button-delete", "", "headerButtonDelete", "../alien-svgrepo-com.svg", "svg");

    // append block with title and buttons
    buttonsWrapper.appendChild(themeButton);
    buttonsWrapper.appendChild(closeButton);
    mainTitleAndButtonsWrapper.appendChild(mainTitle);
    mainTitleAndButtonsWrapper.appendChild(buttonsWrapper);
    aside.appendChild(mainTitleAndButtonsWrapper);

    // append block with add task button and list of different sort of tasks
    addTaskAndPagesWrapper.appendChild(addTaskButton);
    addTaskAndPagesWrapper.appendChild(createdList);
    aside.appendChild(addTaskAndPagesWrapper);

    // append block with project title and button to add a project
    projectAddButtonAndProjectListWrapper.appendChild(projectAddButton);
    projectAddButtonAndProjectListWrapper.appendChild(projectList);
    aside.appendChild(projectAddButtonAndProjectListWrapper);

    // append two buttons for header
    headerButtonsWrapper.appendChild(changeProjectButton);
    headerButtonsWrapper.appendChild(deleteProjectButton);
    header.appendChild(headerButtonsWrapper);

    headerAndMainWrapper.appendChild(header);
    headerAndMainWrapper.appendChild(main);
    container.appendChild(aside);
    container.appendChild(headerAndMainWrapper);

    renderProjects();
}

export default Layout;