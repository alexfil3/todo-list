function showPriorityList(e) {
    e.preventDefault();

    const ul = document.querySelector(".settings-list1");
    if (ul.classList.contains("flex")) {
        ul.classList.remove("flex");
        return
    }
    
    ul.classList.add("flex");
}

export default showPriorityList;