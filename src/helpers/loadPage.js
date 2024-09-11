import allTasks from "../pages/allTasks";
import today from "../pages/today";
import upcoming from "../pages/upcoming";
import completed from "../pages/completed"

function loadPage(e) {
    const button = e.target.closest('button')
    
    if (!button) {
        return
    }

    switch (button.id) {
        case "allTasks":
            allTasks();
            break;
        case "today":
            today();
            break;
        case "upcoming":
            upcoming();
            break;
        case "completed":
            completed();
            break;
        default:
            return;
    }
}

export default loadPage;