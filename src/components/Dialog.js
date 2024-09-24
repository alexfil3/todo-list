function Dialog(className) {
    const dialog = document.createElement("dialog");
    dialog.classList.add(className);

    dialog.addEventListener('click', (e) => {
        if (e.target.closest("ul")) {
            return
        }
        
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
        
        if (!isInDialog) {
            dialog.close();
        }
    });

    return dialog;
}

export default Dialog;