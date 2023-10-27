import express from "express"

import UsersController from "../controllers/usersController.js"
import { validateUser } from "../middlewares/userValidate.js"

const router = express.Router()

router.get("/", UsersController.getAllUsers)
router.get("/:userId", UsersController.getOneUser)
router.post("/signup", validateUser, UsersController.createUser)
router.put("/", validateUser, UsersController.updateUser)
router.delete("/:userId", UsersController.deleteUser)

export default router;
