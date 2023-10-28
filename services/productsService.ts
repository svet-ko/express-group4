import { ProductRepo } from "../models/Product.js"
import { VProduct } from "../types/products1.js"

const productsRepo = new ProductRepo()

function findAll() {
  const products = productsRepo.findAll()
  return products
}

function findOne(productId: number) {
  const product = productsRepo.findOne(productId)

  return product
}

function createOne(product: VProduct) {
  const newProduct = productsRepo.createOne(product)

  return newProduct
}

function deleteOne(productId: number) {
  const deletedProduct = productsRepo.deleteOne(productId);

  return deletedProduct;
}

function updateOne(productId: number, updatesForProduct: Partial<VProduct>) {
  const updatedProduct = productsRepo.updateOne(productId, updatesForProduct);

  return updatedProduct;
}

export default {
  findOne,
  findAll,
  createOne,
  deleteOne,
  updateOne,
}
