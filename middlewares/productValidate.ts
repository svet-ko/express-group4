import { NextFunction, Request, Response } from "express"
import { z } from "zod"

export const productSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    price: z
      .number({
        required_error: "Price is required",
      })
      .positive(),
    description: z.string({
      required_error: "Description is required",
    }),
    categoryId: z.number({
      required_error: "CategoryId is required",
    }),
    image: z.string().optional(),
  })
})

export async function validateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await productSchema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}
