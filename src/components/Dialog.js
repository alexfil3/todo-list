function Dialog(className) {
    const dialog = document.createElement("dialog");
    dialog.classList.add(className);

    dialog.addEventListener('click', function(event) {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
        
        if (!isInDialog) {
            dialog.close();
        }
    });

    return dialog;
}

export default Dialog;