import { UsersRepo } from "../models/User.js";
import { User, UserDTO } from "../types/user.js";

const usersRepo = new UsersRepo();
let lastId = usersRepo.getAllUsers().length;

function generateUserId(): number {
    lastId++;
    return lastId;
  }

function getAllUsers(): User[] {
  const users = usersRepo.getAllUsers();
  return users;
}

function getOneUser(userId: number): User | undefined {
  const user = usersRepo.getUserById(userId);
  return user;
}

function handleLogin(password: string, email: string) {
    const isUser = usersRepo.checkUserByEmailAndPassword(password, email);
    if (!isUser) {
        return null
    }
    return usersRepo.getUserByEmailAndPassword(password, email);
}

function createUser(user: UserDTO): User | null {
    const isUser = usersRepo.checkUserByEmailAndPassword(user.name, user.email);
    if (isUser) {
        return null;
    } 
    const id = generateUserId();
    const userData = {id, ...user}; 
    const newUser = usersRepo.createUser(userData);
    return newUser;
}

function updateUser(index: number, user: User): User{
    const updatedUser = usersRepo.updateUser(index, user)
    return updatedUser
};

function deleteUser(index: number){
    usersRepo.deleteUser(index)
    return
};

export default {
    getAllUsers,
    getOneUser,
    handleLogin,
    createUser,
    updateUser,
    deleteUser
};
