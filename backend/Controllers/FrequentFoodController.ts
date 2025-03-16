import { Request, Response } from "express"
import { frequentFoodParams } from "../TypesCheck/FrequentFoodTypes"
import { FREQUENTFOOD } from "../Models/FrequentFood"


//create Frequent Food
export const createFrequentFood = async (req: Request, res: Response) => {
  const { name } = <frequentFoodParams>req.body
  const files = req.files as [Express.Multer.File]
  const path = "http://192.168.1.11:8082/assets/"
  const imageUrl = files.map((file: Express.Multer.File) => path + file.filename)

  const frequentFoods = new FREQUENTFOOD({
    name,
    imageUrl
  })

  try {
    await frequentFoods.save();
    console.log("Frequent Food", frequentFoods);
    res.status(200).json("Frequent Food created successfully")

  } catch (e) {
    res.status(500).json(`Failed to create Frequent Food ${e}`)
  }
}

//fetch By Id Frequent Food
export const getFrequentFood = async (req: Request, res: Response) => {
  try {
    const result = await FREQUENTFOOD.findById(req.params.id)
    res.status(200).json(result)
  } catch (e) {
    res.status(500).json(`Failed to fetch Frequent Food ${e}`)
  }
}

//fetch All Frequent Food
export const getAllFrequentFood = async (req: Request, res: Response) => {
  try {
    const result = await FREQUENTFOOD.find().limit(30)
    res.status(200).json({ result })
  } catch (e) {
    res.status(500).json(`Failed to fetch All Frequent Food ${e}`)
  }
}