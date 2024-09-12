function showDateValue(e) {
    const dateText = document.querySelector(".datepicker-toggle-button p");
    const date = e.target.value;
    
    dateText.textContent = date ? date : "Due to";
}

export default showDateValue;