function removeClass(array, item, className) {
    if (array) {
        array.forEach(item => item.classList.remove(className));
    }

    if (item) {
        item.classList.remove(className);
    }
}

export default removeClass;