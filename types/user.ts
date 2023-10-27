import { z } from "zod";
import { userDataSchema } from "../middlewares/userValidate.js";
import { loginRequestSchema } from "../middlewares/validateLoginRequest.js";

export type UserDTO = z.infer<typeof userDataSchema>
export type User = UserDTO & {id: number, role: "customer" | "admin"}

export type LoginRequest = z.infer<typeof loginRequestSchema>