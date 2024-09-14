import All from "../pages/All";
import Today from "../pages/Today";
import Upcoming from "../pages/Upcoming";
import Completed from "../pages/Completed"

function loadPage(e) {
    const button = e.target.closest('button')
    
    if (!button) {
        return
    }

    switch (button.id) {
        case "All":
            All();
            break;
        case "Today":
            Today();
            break;
        case "Upcoming":
            Upcoming();
            break;
        case "Completed":
            Completed();
            break;
        default:
            return;
    }
}

export default loadPage;