function findItem(id, array) {
    return array.find(item => item.getId() === id)
}

export default findItem;