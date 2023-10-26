import { User } from "../types/user.js"

export class UsersRepo {
  users = [
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

  getOne(userId: number) {
    const product = this.users.find((user) => user.id === userId)
    return product
  }

  getAll() {
    return this.users
  }

  createOne(newUser: User) {
    this.users = [...this.users, newUser]
    return newUser
  }
}
