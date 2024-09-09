import allTasks from "./pages/allTasks";
import { closeAside } from "./buttonsFunctions/asideBurger";
import "./style.css";

allTasks()

const closeAsideBtn = document.querySelector("#close-aside-btn");

closeAsideBtn.addEventListener("click", closeAside)
