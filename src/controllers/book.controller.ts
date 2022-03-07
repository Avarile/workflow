import { Request, Response } from "express"
import { BookCreationService, BookGetAllService, BookEditService, BookQueryService, BookDeleteService } from "../services/book.service"
import { BookCreateInput, BookEditInput } from "../validationSchema/book.validationSchema"

export class BookController {
  async create(req: Request<{}, {}, BookCreateInput["body"]>, res: Response) {
    try {
      const body = req.body
      const newBook = await BookCreationService(req.body)
      res.status(201).json(newBook)
    } catch (error: any) {
      res.status(409).send(error)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const bookId = req.params.bookId
      await BookDeleteService( bookId )
      res.sendStatus(204)
    } catch (error: any) {
      res.status(404).json({ message: error.message })
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const response = await BookGetAllService()
      res.json(response)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
  async getOne(req: Request<BookEditInput["params"]>, res: Response) {
    try {
      const bookId = req.params.bookId
      const response = await BookQueryService(bookId)
      res.send(response)
    } catch (error: any) {
      res.status(404).json({ message: error.message })
    }
  }

  async edit(req: Request<BookEditInput["params"]>, res: Response) {
    try {
      const bookId = req.params.bookId
      const payload = req.body
      // const bookSearch = await BookQueryService( bookId )
      // if (!bookSearch) {
      //   return res.sendStatus(404)
      // }
      const response = await BookEditService( bookId , payload, { new: true })
      res.json(response)
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }
}
