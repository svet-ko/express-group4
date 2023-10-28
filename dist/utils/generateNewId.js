export function generateNewId(categories) {
    const ids = categories.map((category) => category.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
}
