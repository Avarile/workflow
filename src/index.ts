import { ServerTemplate } from "./server/server.config"
import dbConnection from "./utls/dbConnect"
import logger from "./utls/logger"
import config from "config"

const host = config.get<string>("host")
const port = config.get<number>("port")

const server = new ServerTemplate()

const main = async () => {
  try {
    server.start()
    await dbConnection()
    logger.info(`Server is running at ${host} at port:${port}`)
  } catch (error: any) {
    logger.error(error)
  }
}

main()
