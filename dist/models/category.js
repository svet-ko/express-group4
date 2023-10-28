export class CategoryRepo {
    constructor() {
        this.categories = [
            {
                id: 1,
                name: "Laptop",
                description: "High-performance laptop for all your needs.",
            },
            {
                id: 2,
                name: "Smartphone",
                description: "Latest smartphone with advanced features.",
            },
        ];
    }
    generateNewId() {
        if (!this.categories.length)
            return 1;
        const maxId = Math.max(...this.categories.map((category) => category.id));
        return maxId + 1;
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
        const id = this.generateNewId();
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
