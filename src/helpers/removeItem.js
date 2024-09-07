function removeItem(id, array) {
    const index = array.findIndex(item => item.getId() === id)

    if (index !== -1) {
        array.splice(index, 1)
    }
}

export default removeItem;