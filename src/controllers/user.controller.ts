import { Request, Response } from "express"
import { UserCreationService, UserGetAllService, UserGetOneService, UserDeleteService, UserEditService } from "../services/user.service"
import { UserCreationInput } from "../validationSchema/user.validationSchema"

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const newUser = await UserCreationService(req.body)
      res.status(201).json(newUser)
    } catch (error: any) {
      res.status(409).json({ message: error.message }) // most likey this is because of duplicated email
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await UserDeleteService(req.params.id)
      res.sendStatus(204)
    } catch (error: any) {
      res.status(409).json({ message: error.message }) // most likey this is because of duplicated email
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const response = await UserGetAllService()
      res.json(response)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

  async getOne(req: Request<UserCreationInput["body"]>, res: Response) {
    try {
      let user_id = req.query._id
      const response = await UserGetOneService({ user_id })
      res.send(response)
    } catch (error: any) {
      res.status(404).json({ message: error.message })
    }
  }

  async edit(req: Request<UserCreationInput["body"]>, res: Response) {
    try {
      const user_id = req.params._id
      const response = await UserEditService({ user_id }, req.body, { new: true })
      res.json(response)
    } catch (error: any) {
      res.sendStatus(500).json({ message: error.message })
    }
  }
}
