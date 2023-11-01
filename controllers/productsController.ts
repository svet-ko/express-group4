import { NextFunction, Request, Response } from "express";

import ProductsService from "../services/productsService.js";
import { ApiError } from "../errors/ApiError.js";

export function findAllProduct(_: Request, res: Response, next: NextFunction) {
  const products = ProductsService.findAll();

  res.json({ products });
}

export function findOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const productId = Number(req.params.productId);
  const product = ProductsService.findOne(productId);

  if (!product) {
    next(ApiError.resourceNotFound("Product not found"));
    return;
  }

  res.json({ product });
}

export function createOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newProduct = req.body;
  const product = ProductsService.createOne(newProduct);

  if (!product) {
    next(ApiError.internal("Product was not created. Please, try again"));
    return;
  }

  res.status(201).json({ product });
}

export function deleteOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const productId = Number(req.params.productId);
  const product = ProductsService.deleteOne(productId);

  if (!product) {
    next(ApiError.resourceNotFound("Product not found"));
    return;
  }

  res.json({ product });
}

export function updateOneProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const productId = Number(req.params.productId);
  const updatesForProduct = req.body;
  const productToUpdate = ProductsService.findOne(productId);

  if (!productToUpdate) {
    next(ApiError.resourceNotFound("Product not found"));
    return;
  }

  const updatedProduct = ProductsService.updateOne(
    productId,
    updatesForProduct
  );

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
