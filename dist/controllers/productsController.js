import ProductsService from "../services/productsService.js";
import { ApiError } from "../errors/ApiError.js";
export function findAllProduct(_, res, next) {
    const products = ProductsService.findAll();
    res.json({ products });
}
export function findOneProduct(req, res, next) {
    const productId = Number(req.params.productId);
    const product = ProductsService.findOne(productId);
    if (!product) {
        next(ApiError.resourceNotFound("Product not found"));
        return;
    }
    res.json({ product });
}
export function createOneProduct(req, res, next) {
    const newProduct = req.body;
    const product = ProductsService.createOne(newProduct);
    if (!product) {
        next(ApiError.internal("Product was not created. Please, try again"));
        return;
    }
    res.status(201).json({ product });
}
export function deleteOneProduct(req, res, next) {
    const productId = Number(req.params.productId);
    const product = ProductsService.deleteOne(productId);
    if (!product) {
        next(ApiError.resourceNotFound("Product not found"));
        return;
    }
    res.json({ product });
}
export function updateOneProduct(req, res, next) {
    const productId = Number(req.params.productId);
    const updatesForProduct = req.body;
    const productToUpdate = ProductsService.findOne(productId);
    if (!productToUpdate) {
        next(ApiError.resourceNotFound("Product not found"));
        return;
    }
    const updatedProduct = ProductsService.updateOne(productId, updatesForProduct);
    if (!updatedProduct) {
        next(ApiError.internal("Could not update product"));
        return;
    }
    res.json({ updatedProduct });
}
export default {
    findOneProduct,
    findAllProduct,
    createOneProduct,
    deleteOneProduct,
    updateOneProduct,
};
