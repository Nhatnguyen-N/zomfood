import express, { Application } from "express"
import { FrequentFoodRouters } from "../Routes"

export default async (app: Application) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/assets', express.static('assets'))

  app.use("/frequent", FrequentFoodRouters)

  return app
}
