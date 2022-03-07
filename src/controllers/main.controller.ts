import { Request, Response } from "express"

export class RootController {
  test(req: Request, res: Response) {
    res.json({
      message: "The Api is running, Test passed",
    })
  }
}
