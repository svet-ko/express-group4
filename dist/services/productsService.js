import { ProductRepo } from "../models/Product.js";
const productsRepo = new ProductRepo();
function findAll() {
    const products = productsRepo.findAll();
    return products;
}
function findOne(productId) {
    const product = productsRepo.findOne(productId);
    return product;
}
function createOne(product) {
    const newProduct = productsRepo.createOne(product);
    return newProduct;
}
function deleteOne(productId) {
    const deletedProduct = productsRepo.deleteOne(productId);
    return deletedProduct;
}
function updateOne(productId, updatesForProduct) {
    const updatedProduct = productsRepo.updateOne(productId, updatesForProduct);
    return updatedProduct;
}
export default {
    findOne,
    findAll,
    createOne,
    deleteOne,
    updateOne,
};
