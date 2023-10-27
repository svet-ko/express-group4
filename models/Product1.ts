import { Product } from "../types/products.js"

// Simulating a DataBase
export class ProductRepo {
  products = [
    {
      id: 1,
      name: "Laptop",
      image: "https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg",
      description: "High-performance laptop for all your needs.",
      categories: [1, 2],
      variants: ["8GB RAM", "16GB RAM"],
      sizes: ["13-inch", "15-inch"],
    },
    {
      id: 2,
      name: "Smartphone",
      image: "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg",
      description: "Latest smartphone with advanced features.",
      categories: [1, 3],
      variants: ["64GB", "128GB"],
      sizes: [],
    },
  ]

  findOne(productId: number) {
    const product = this.products.find((product) => product.id === productId)
    return product
  }

  findAll() {
    return this.products
  }

  createOne(newProduct: Product) {
    this.products = [...this.products, newProduct]
    return newProduct
  }

  deleteOne(productId: number) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      return
    }
    this.products.splice(product.id, 1);

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

    // const updatedProductIndex = this.products.findIndex(product => product.id === productId);

    // if (updatedProductIndex === -1) {
    //   return;
    // }

    // this.products[updatedProductIndex] = {
    //   ...this.products[updatedProductIndex],
    //   ...updatesForProduct
    // }

    // return this.products[updatedProductIndex];
  }
}
