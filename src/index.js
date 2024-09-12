import allTasks from "./pages/allTasks";
import { closeAside } from "./helpers/openCloseAside";
import loadPage from "./helpers/loadPage";
import "./style.css";

allTasks();

const closeAsideBtn = document.querySelector("#close-aside-btn");
closeAsideBtn.addEventListener("click", closeAside);

const nav = document.querySelector(".nav");
nav.addEventListener("click", loadPage);
