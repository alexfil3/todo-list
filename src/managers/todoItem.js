import { nanoid } from 'nanoid'

function createTodoItem(title, description, dueDate, priority, project, completed) {
  const id = nanoid()

  function getId() {
    return id;
  }

  function getTitle() {
    return title;
  }

  function getCompleted() {
    return completed;
  }

  function getDescription() {
    return description;
  }

  function getDueDate() {
    return dueDate;
  }

  function getPriority() {
    return priority;
  }

  function getProject() {
    return project;
  }

  return {
    getId,
    getTitle,
    getDescription,
    getCompleted,
    getDueDate,
    getPriority,
    getProject,
  };
}

export default createTodoItem;