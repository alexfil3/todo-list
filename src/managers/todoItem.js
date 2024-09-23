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

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getDescription() {
    return description;
  }

  function setDescription(newDescription) {
    description = newDescription;
  }

  function getDueDate() {
    return dueDate;
  }

  function setDueDate(newDueDate) {
    dueDate = newDueDate;
  }

  function getPriority() {
    return priority;
  }

  function setPriority(newPriority) {
    priority = newPriority;
  }

  function getProject() {
    return project;
  }

  function setProject(newProject) {
    project = newProject
  }

  return {
    getId,
    getTitle,
    setTitle,
    getDescription,
    getCompleted,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getProject,
    setProject,
  };
}

export default createTodoItem;