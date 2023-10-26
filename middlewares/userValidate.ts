import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const userSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  /*role: z.enum(["customer", "admin"], {
    required_error: "Role is required and must be 'customer' or 'admin'",
  }),*/
  /*email: z.string().email({
    required_error: "Email is required and must be a valid email",
  }),*/
  email: z.string().min(1).email(),
  password: z.string({
    required_error: "Password is required",
  }),
  avatar: z.string({
    required_error: "Avatar is required",
  }),
});

export async function validateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await userSchema.parseAsync(req.body);
    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}
