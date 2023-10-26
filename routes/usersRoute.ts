import express from "express"

import UsersController from "../controllers/usersController.js"
import { validateUser } from "../middlewares/userValidate.js"

const router = express.Router()

router.get("/", UsersController.getAllUsers)
router.get("/:userId", UsersController.getOneUser)
router.post("/signup", validateUser, UsersController.createOneUser)
//router.get("/login", validateUser, UserController.login)

export default router

/*
import { signupHandler, loginHandler } from '../controllers/userController';

const router = express.Router();

router.post('/signup', signupHandler);
router.post('/login', loginHandler);

export default router;*/