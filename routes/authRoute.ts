import express from "express"
import UsersController from "../controllers/usersController.js"
import { validateUser } from "../middlewares/userValidate.js"

const router = express.Router()

router.get("/auth", validateUser, UsersController.login)

export default router;