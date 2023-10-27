import { User } from "../types/user.js"

export class UsersRepo {
  users: User[] = [
    {
        id: 1,
        name: "Ieva",
        role: "admin",
        email: "ieva@email.com",
        password: "admin123",
        avatar: ""
    },
    {
        id: 2,
        name: "User",
        role: "customer",
        email: "user@email.com",
        password: "123123",
        avatar: ""
    }  
  ]
  
  getAllUsers() {
    return this.users
  }

  getUserById(userId: number) {
    const product = this.users.find((user) => user.id === userId)
    return product
  }

  checkUserByEmailAndPassword(password: string, email: string){
    return this.users.some(user => user.password === password && user.email === email);
  }

  getUserByEmailAndPassword(password: string, email: string) {
    return this.users.find(user => user.password === password && user.email === email);
  }
  
  createUser(newUser: User) {
    this.users = [...this.users, newUser]
    return newUser
  }

  updateUser(index: number, updatedUser: User){
    this.users.splice(index, 1, updatedUser)
    return updatedUser
  }

  deleteUser(index: number){
    this.users.splice(index, 1)
    return this.users
  }

}
