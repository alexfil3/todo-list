import Aside from "../newComponents/Aside";
import Main from "../newComponents/Main";
import Header from "../newComponents/Header";
import Div from "../newComponents/Div";
import Title from "../newComponents/Title";
import Button from "../newComponents/Button";
import List from "../newComponents/List";
import createPagesList from "../newHelpers/createPagesList";
import loadPage from "../newHelpers/loadPage";
import { closeAside } from "../newHelpers/openCloseAside";
import openDialog from "../newHelpers/openDialog";
import createAddTaskDialog from "../newHelpers/createAddTaskDialog";

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
    const projectAddButton = Button("project-add-button", "Projects", "projectAddButton", "../alien-svgrepo-com.svg", "svg");

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
    aside.appendChild(projectAddButton);

    // append two buttons for header
    headerButtonsWrapper.appendChild(changeProjectButton);
    headerButtonsWrapper.appendChild(deleteProjectButton);
    header.appendChild(headerButtonsWrapper);

    headerAndMainWrapper.appendChild(header);
    headerAndMainWrapper.appendChild(main);
    container.appendChild(aside);
    container.appendChild(headerAndMainWrapper);
}

export default Layout;