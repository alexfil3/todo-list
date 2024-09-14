import dialogModal from "../components/dialog";
import itemForm from "../components/itemForm";

function openItemDialog() {
    const container = document.querySelector(".container");

    const dialog = dialogModal();
    const form = itemForm();

    dialog.appendChild(form);
    
    container.appendChild(dialog);

    dialog.showModal();

    dialog.addEventListener("close", () => {
        dialog.close();
    })
}

export default openItemDialog;