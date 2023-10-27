import { z } from "zod";
import { userSchema } from "../middlewares/userValidate.js";

export type UserDTO = z.infer<typeof userSchema>
export type User = UserDTO & {id: number}