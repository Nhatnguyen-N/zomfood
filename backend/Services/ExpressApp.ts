import express, { Application } from "express"
import { FrequentFoodRouters, RestaurantRoutes } from "../Routes"

export default async (app: Application) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/assets', express.static('assets'))

  app.use("/frequent", FrequentFoodRouters)
  app.use("/restaurant", RestaurantRoutes)

  return app
}
