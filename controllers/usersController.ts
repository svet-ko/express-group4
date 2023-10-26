import { NextFunction, Request, Response } from "express";
import UserService from "../services/usersService.js";
import { ApiError } from "../errors/ApiError.js";

function getAllUsers(_: Request, res: Response) {
  const users = UserService.getAll();
  res.json({ users });
}

function getOneUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = Number(req.params.userId);
  const user = UserService.getOne(userId);

  if (!user) {
    next(ApiError.resourceNotFound("User not found."));
    return;
  }
  res.json({ user });
}

function createOneUser(req: Request, res: Response) {
  const newUser = req.body;
  const user = UserService.createOne(newUser);

  res.status(201).json({ user });
}

export default {
  getOneUser,
  getAllUsers,
  createOneUser,
};
