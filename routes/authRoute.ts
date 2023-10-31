import express from "express"
import UsersController from "../controllers/usersController.js"
import { validateLoginRequest } from "../middlewares/validateLoginRequest.js"

const router = express.Router()

router.post("/", UsersController.login)

export default router;