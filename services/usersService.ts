import { UsersRepo } from "../models/User.js";
import { User } from "../types/user.js";

const usersRepo = new UsersRepo();

function getAll() {
  const users = usersRepo.getAll();
  return users;
}

function getOne(userId: number) {
  const user = usersRepo.getOne(userId);
  return user;
}

function createOne(user: User): User {
  const newUser = usersRepo.createOne(user);
  return newUser;
}

export default {
  getOne,
  getAll,
  createOne,
};
