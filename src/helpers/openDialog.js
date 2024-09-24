function openDialog(createDialog, title, description, date, priority, project, id) {
    const container = document.querySelector(".container");
    const dialog = createDialog(title, description, date, priority, project, id);
    
    container.appendChild(dialog);

    dialog.showModal();

    dialog.addEventListener("close", () => {
        container.removeChild(dialog);
    })
}

export default openDialog;