import allTasks from "./pages/allTasks";
import { closeAside } from "./actionButtons/openCloseAside";
import "./style.css";

allTasks();

const closeAsideBtn = document.querySelector("#close-aside-btn");

closeAsideBtn.addEventListener("click", closeAside);
