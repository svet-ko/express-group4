var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { generateId } from "../utils/generateId.js";
import { CategoryRepo } from "./Category.js";
export class ProductRepo {
    constructor() {
        this.products = [
            {
                id: 1,
                title: "Cool Hoody",
                price: 60,
                description: "Cool hoodie for your good boy",
                images: ["https://i.imgur.com/p8AjjXS.jpeg"],
                category: {
                    id: 17,
                    name: "Clothes",
                    description: "Clothes category"
                },
            },
            {
                id: 2,
                title: "Warm Hoody",
                price: 10,
                description: "A warm hoodie to keep your dog warm and cozy!",
                images: ["https://i.imgur.com/LlMBmIX.jpeg"],
                category: {
                    id: 17,
                    name: "Clothes",
                    description: "Clothes category"
                },
            },
        ];
    }
    getProductCategoryById(categoryId) {
        const categoriesRepo = new CategoryRepo();
        const categories = categoriesRepo.getAll();
        const categoriesIdList = categories.map(category => category.id);
        if (categoriesIdList.includes(categoryId)) {
            return categories.find(category => category.id === categoryId);
        }
        return;
    }
    findOne(productId) {
        const product = this.products.find((product) => product.id === productId);
        return product;
    }
    findAll() {
        return this.products;
    }
    createOne(newProduct) {
        const id = generateId(this.products);
        const productCategory = this.getProductCategoryById(newProduct.categoryId);
        if (!!productCategory) {
            let { categoryId } = newProduct, rest = __rest(newProduct, ["categoryId"]);
            const product = Object.assign(Object.assign({}, rest), { category: productCategory, id });
            this.products = [...this.products, product];
            return product;
        }
        return;
    }
    deleteOne(productId) {
        const product = this.products.find((product) => product.id === productId);
        const index = this.products.findIndex((products) => products.id === productId);
        if (!product) {
            return;
        }
        this.products.splice(index, 1);
        return product;
    }
    updateOne(productId, updatesForProduct) {
        let updatedProduct = undefined;
        let productCategory = undefined;
        if (!!updatesForProduct.categoryId) {
            productCategory = this.getProductCategoryById(updatesForProduct.categoryId);
            if (!productCategory) { //checking whether category was found
                return;
            }
        }
        const updatedProducts = this.products.map((product) => {
            if (product.id === productId) {
                if (productCategory) {
                    let { categoryId } = updatesForProduct, rest = __rest(updatesForProduct, ["categoryId"]);
                    updatedProduct = Object.assign(Object.assign(Object.assign({}, product), { category: productCategory }), rest);
                }
                else {
                    updatedProduct = Object.assign(Object.assign({}, product), updatesForProduct);
                }
                return updatedProduct;
            }
            return product;
        });
        this.products = updatedProducts;
        return updatedProduct;
    }
}
