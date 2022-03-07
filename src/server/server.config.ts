import express, { Application } from "express"
import cors from "cors"
import config from "config"
import rootRoutes from "../routes/index.routes"
import userRoutes from "../routes/user.routes"
import bookRoutes from "../routes/book.routes"

export class ServerTemplate {
  app: Application
  port: number = config.get<number>("port")

  /**
   *
   */
  constructor() {
    this.app = express()
    this.config()
  }

  private config() {
    this.app.set("server port", this.port)
  }

  private middelwares() {
    this.app.use(cors({ origin: "*" }))
    this.app.use(express.json())
    this.app.use(
      express.urlencoded({
        extended: false,
      })
    )
  }

  private routes() {
    // this.app.use("/", rootRoutes)
    this.app.use("/users", userRoutes)
    this.app.use("/books", bookRoutes)
  }

  public start() {
    this.middelwares()
    this.routes()
    this.app.listen(this.app.get("server port"))
  }
}
