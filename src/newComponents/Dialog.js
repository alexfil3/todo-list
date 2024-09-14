function Dialog(className) {
    const dialog = document.createElement("dialog");
    dialog.classList.add(className);

    return dialog;
}

export default Dialog;