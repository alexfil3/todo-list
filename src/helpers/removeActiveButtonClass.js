function removeActiveButtonClass() {
    const list = Array.from(document.querySelectorAll(".nav-button"));

    list.forEach(item => item.classList.remove("active-button"));
}

export default removeActiveButtonClass;