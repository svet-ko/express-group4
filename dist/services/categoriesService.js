import { CategoryRepo } from "../models/category.js";
const categoriesRepo = new CategoryRepo();
function getAll() {
    const categories = categoriesRepo.getAll();
    return categories;
}
function getOne(categoryId) {
    const category = categoriesRepo.getOne(categoryId);
    return category;
}
function findIndex(categoryId) {
    const categoryIndex = categoriesRepo.findIndex(categoryId);
    return categoryIndex;
}
function createOne(category) {
    const newCategory = categoriesRepo.createOne(category);
    return newCategory;
}
function updateCategory(categoryId, category) {
    const updateCategory = categoriesRepo.updateCategory(categoryId, category);
    return updateCategory;
}
function deleteCategory(categoryId) {
    const category = categoriesRepo.deleteCategory(categoryId);
    return category;
}
export default {
    getOne,
    getAll,
    createOne,
    findIndex,
    updateCategory,
    deleteCategory,
};
