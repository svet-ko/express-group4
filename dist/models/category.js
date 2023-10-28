import { generateId } from "../utils/generateId.js";
export class CategoryRepo {
    constructor() {
        this.categories = [
            {
                id: 1,
                name: "Electronics",
                description: "This category encompasses devices that work with electronic technology. It includes items such as smartphones, laptops, cameras, TVs, and other gadgets",
            },
            {
                id: 2,
                name: "Clothing and Fashion",
                description: " Apparel, accessories, and footwear fall under this category. It includes clothing items for men, women, and children, as well as various fashion accessories.",
            },
        ];
    }
    // Get a category by ID
    getOne(categoryId) {
        const category = this.categories.find((category) => category.id === categoryId);
        return category;
    }
    // Find the index of a category by ID
    findIndex(categoryId) {
        return this.categories.findIndex((category) => category.id === categoryId);
    }
    // Get all categories
    getAll() {
        return this.categories;
    }
    // Create a new category
    createOne(newCategory) {
        const id = generateId(this.categories);
        const categoryWithId = Object.assign(Object.assign({}, newCategory), { id });
        this.categories = [...this.categories, categoryWithId];
        return categoryWithId;
    }
    // Update a category by ID
    updateCategory(categoryId, category) {
        const categoryIndex = this.findIndex(categoryId);
        if (categoryIndex !== -1) {
            this.categories[categoryIndex] = Object.assign(Object.assign({}, this.categories[categoryIndex]), category);
            return this.categories[categoryIndex];
        }
        return null;
    }
    // Delete a category by ID
    deleteCategory(categoryId) {
        this.categories = this.categories.filter((category) => category.id !== categoryId);
        return;
    }
}
