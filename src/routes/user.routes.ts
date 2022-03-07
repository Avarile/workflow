import { Router } from "express"
import { UserController } from "../controllers/user.controller"

const userRouter = Router()
const controller = new UserController()

userRouter.get("/", controller.getAll)
userRouter.post("/", controller.create)

userRouter.get("/:_id", controller.getOne)
userRouter.delete("/:_id", controller.delete)
userRouter.put("/:_id", controller.edit)

export default userRouter
