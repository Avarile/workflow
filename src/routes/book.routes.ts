import { Router } from "express"
import { BookController } from "../controllers/book.controller"

const bookRouter = Router()
const controller = new BookController()

bookRouter.get("/", controller.getAll)
bookRouter.post("/", controller.create)

bookRouter.get("/:id", controller.getOne)
bookRouter.delete("/:id", controller.delete)
bookRouter.put("/:id", controller.edit)

export default bookRouter
