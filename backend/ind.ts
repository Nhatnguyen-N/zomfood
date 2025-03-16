import express from "express"
import Dbcon from "./Services/Database"
import App from "./Services/ExpressApp"
import { PORT } from "./Config";


const StartServer = async () => {
  const app = express();
  await Dbcon()
  await App(app)

  app.listen(PORT, () => {
    console.log(`Database connection from PORT ${PORT}`);

  })
}

StartServer();