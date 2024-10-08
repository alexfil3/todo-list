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
import editProject from "../helpers/editProject";
import deleteProject from "../helpers/deleteProject";

function Layout() {
    const container = document.querySelector("#container");
    const aside = Aside("aside");
    const headerAndMainWrapper = Div("header-and-main-wrapper");
    const header = Header("header");
    const main = Main("main", "main");
    
    const themeSvg = document.querySelector("#theme");
    const menuSvg = document.querySelector("#menu");
    const plusSvg = document.querySelector("#plus");

    const mainTitleAndButtonsWrapper = Div("main-title-and-buttons-wrapper");
    const mainTitle = Title("h1", "Todo List", "main-title");
    const buttonsWrapper = Div("buttons-wrapper");
    const themeButton = Button("theme-button", "", "themeButton", "", "svg");
    themeButton.appendChild(themeSvg);
    const closeButton = Button("close-aside-button", "", "closeAsideButton", "", "svg", closeAside);
    closeButton.appendChild(menuSvg);

    const addTaskAndPagesWrapper = Div("add-task-and-pages-wrapper");
    const addTaskButton = Button("add-task-button", "Add task", "addTask", "", "svg", () => openDialog(createAddTaskDialog));
    addTaskButton.insertBefore(plusSvg, addTaskButton.firstChild);
    const pagesList = List("pages-list", loadPage);
    const createdList = createPagesList(pagesList, "pages-list-item", "pages-list-button");

    const projectAddButtonAndProjectListWrapper = Div("project-add-button-and-project-list-wrapper");
    const projectAddButton = Button("project-add-button", "Projects", "projectAddButton", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddProjectDialog));
    const projectList = List("projects-list", selectProjectToRender);

    const headerButtonsWrapper = Div("header-buttons-wrapper");
    const changeProjectButton = Button("header-button-change", "", "headerButtonChange", "../alien-svgrepo-com.svg", "svg", () => openDialog(createAddProjectDialog, editProject));
    const deleteProjectButton = Button("header-button-delete", "", "headerButtonDelete", "../alien-svgrepo-com.svg", "svg", deleteProject);

    buttonsWrapper.appendChild(themeButton);
    buttonsWrapper.appendChild(closeButton);
    mainTitleAndButtonsWrapper.appendChild(mainTitle);
    mainTitleAndButtonsWrapper.appendChild(buttonsWrapper);
    aside.appendChild(mainTitleAndButtonsWrapper);

    addTaskAndPagesWrapper.appendChild(addTaskButton);
    addTaskAndPagesWrapper.appendChild(createdList);
    aside.appendChild(addTaskAndPagesWrapper);

    projectAddButtonAndProjectListWrapper.appendChild(projectAddButton);
    projectAddButtonAndProjectListWrapper.appendChild(projectList);
    aside.appendChild(projectAddButtonAndProjectListWrapper);

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