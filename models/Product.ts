import { Category } from "../types/categories.js";
import { Product, VProductToCreate } from "../types/products.js";
import { generateId } from "../utils/generateId.js";
import { CategoryRepo } from "./Category.js";

export class ProductRepo {
  products: Product[] = [
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
  ]

  getProductCategoryById(categoryId: number): Category | undefined {
    const categoriesRepo = new CategoryRepo()
    const categories = categoriesRepo.getAll();
    const categoriesIdList = categories.map(category => category.id);
    if (categoriesIdList.includes(categoryId)) {
      return categories.find(category => category.id === categoryId)
    }
    return
  }

  findOne(productId: number) {
    const product = this.products.find((product) => product.id === productId)
    return product
  }

  findAll() {
    return this.products
  }

  createOne(newProduct: VProductToCreate) {
    const id = generateId(this.products);
    const productCategory = this.getProductCategoryById(newProduct.categoryId);

    if (!!productCategory) {
      let {categoryId, ...rest} = newProduct;
      const product: Product = {
        ...rest,
        category: productCategory as Category,
        id
      }
      this.products = [...this.products, product]
      return product;
    }

    return;
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

  updateOne(productId: number, updatesForProduct: Partial<VProductToCreate>) {
    let updatedProduct = undefined;
    let productCategory: Category | undefined = undefined;

    if (!!updatesForProduct.categoryId) {
      productCategory = this.getProductCategoryById(updatesForProduct.categoryId)
      if (!productCategory) { //checking whether category was found
        return
      }
    }

    const updatedProducts = this.products.map((product) => {
      if (product.id === productId) {
        if (productCategory) {
          let {categoryId, ...rest} = updatesForProduct;
          updatedProduct = {
            ...product,
            category: productCategory as Category,
            ...rest
          }
        } else {
          updatedProduct = {
            ...product,
            ...updatesForProduct
          }
        }
        return updatedProduct;
      }
      return product;
    });

    this.products = updatedProducts;
    return updatedProduct;
  }
}
