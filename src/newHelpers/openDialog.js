function openDialog(createDialog) {
    const container = document.querySelector(".container");
    const dialog = createDialog();
    
    container.appendChild(dialog);

    dialog.showModal();

    dialog.addEventListener("close", () => {
        container.removeChild(dialog);
    })
}

export default openDialog;