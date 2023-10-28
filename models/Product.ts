import { Product, VProduct } from "../types/products1.js";
import { generateId } from "../utils/generateId.js";

export class ProductRepo {
  products: Product[] = [
    {
      id: 1,
      title: "Cool Hoody",
      price: 60,
      description: "Cool hoodie for your good boy",
      images: ["https://i.imgur.com/p8AjjXS.jpeg"],
      category: 17,
    },
    {
      id: 2,
      title: "Warm Hoody",
      price: 10,
      description: "A warm hoodie to keep your dog warm and cozy!",
      images: ["https://i.imgur.com/LlMBmIX.jpeg"],
      category: 17,
    },
  ]

  findOne(productId: number) {
    const product = this.products.find((product) => product.id === productId)
    return product
  }

  findAll() {
    return this.products
  }

  createOne(newProduct: VProduct) {
    const id = generateId(this.products);
    const product: Product = {id, ...newProduct};
    this.products = [...this.products, product]
    return product;
  }

  deleteOne(productId: number) {
    const product = this.products.find((product) => product.id === productId);
    const index = this.products.findIndex((products) => products.id === productId);
    if (!product) {
      return
    }
    this.products.splice(index, 1);

    return product
  }

  updateOne(productId: number, updatesForProduct: Partial<Product>) {
    let updatedProduct = undefined;

    const updatedProducts = this.products.map((product) => {
      if (product.id === productId) {
        updatedProduct = {
          ...product,
          ...updatesForProduct
        }
        return updatedProduct;
      }
      return product;
    });

    this.products = updatedProducts;
    return updatedProduct;
  }
}
