import { nanoid } from "nanoid";

function createProject(name, color) {
    const id = nanoid();

    function getId() {
        return id;
    }

    function getName() {
        return name;
    }

    function getColor() {
        return color;
    }

    return {
        getId,
        getName,
        getColor,
    }
}

export default createProject;