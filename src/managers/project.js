import { nanoid } from "nanoid";
import removeItem from "./helpers/removeItem";

function createProject(name) {
    const id = nanoid();
    const todoList = [];

    function getId() {
        return id;
    }

    function getName() {
        return name;
    }

    function setName(newName) {
        name = newName;
    }

    function getTodoList() {
        return todoList;
    }

    function addTodoItem(todoItem) {
        todoList.push(todoItem);
    }

    function removeTodoItem(id) {
        removeItem(id, todoList)
    }

    return {
        getId,
        getName,
        setName,
        getTodoList,
        addTodoItem,
        removeTodoItem,
    }
}

export default createProject;