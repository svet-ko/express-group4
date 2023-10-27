import { z } from "zod";
import { Category } from "./Category.js";
import { productSchema } from '../middlewares/productValidate1.js'

export type Product = {
  id?: number,
  title: string,
  price: number,
  description: string,
  category: number,
  images: string[]
}

export type ProductDTO = z.infer<typeof productSchema>
export type VProduct = ProductDTO & Product