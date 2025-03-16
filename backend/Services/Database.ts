
import mongoose from "mongoose"
import { MONGO_URI } from "../Config"
export default async () => {
  try {
    await mongoose.connect(MONGO_URI)
  } catch (e) {
    console.log(e);
    process.exit(1)

  }
}