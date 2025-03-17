import mongoose, { Schema } from "mongoose";
import { restaurantProps } from "../TypesCheck/RestaurantTypes";

const restaurantSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  imageUrl: [{
    type: String,
    require: true
  }],
  foodType: {
    type: String,
    require: true
  },
  time: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
  },
  ratingCount: {
    type: Number
  },
  serviceCharge: {
    type: Number
  },
  coords: {
    latitude: { type: Number },
    longitude: { type: Number },
    address: { type: String }
  }

},
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__V;
        delete ret.createdAt;
        delete ret.updatedAt;
      }
    },
    timestamps: true
  }
)
const RESTAURANTS = mongoose.model<restaurantProps>("restaurants", restaurantSchema)
export { RESTAURANTS }