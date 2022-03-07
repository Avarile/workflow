import { connect } from "mongoose"
import config from "config"
import logger from "./logger"

const dbUrl = config.get<string>("dbUrl")

const dbConnection = () => {
  return connect(dbUrl, {})
    .then(() => {
      logger.info("Database Connected")
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export default dbConnection
