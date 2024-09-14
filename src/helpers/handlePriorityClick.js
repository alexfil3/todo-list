function handlePriorityClick(e) {
    e.preventDefault();

    const button = e.target.closest('button');
    const p = button.querySelector("p");
    const priority = document.querySelector(".settings-item1")
    const text = priority.querySelector("p")

    priority.style.borderColor = button.style.color;
    priority.style.color = button.style.color;
    text.textContent = p.textContent;

    console.log(button.id)

}

export default handlePriorityClick;