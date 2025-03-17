import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { coordParams } from "../TypeCheck/TypeParams";
import { restCardStyle } from "../StylesComponent/CardStyle";
import StarRating from "./StarRating";

export interface restaurantItemProps {
  item: {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    foodType: string;
    time: string;
    serviceCharge: number;
    rating: number;
    ratingCount: number;
    coords: coordParams;
  };
}

const RestaurantCard = ({ item }: restaurantItemProps) => {
  return (
    <Pressable>
      <View style={restCardStyle.cardContainer}>
        <View>
          <Image
            source={{ uri: item?.imageUrl[0] }}
            style={restCardStyle.image}
          />
        </View>
        <View style={restCardStyle.details}>
          <View style={restCardStyle.textContainer}>
            <View style={restCardStyle.nameTimeContainer}>
              <Text style={restCardStyle.restName} numberOfLines={1}>
                {item?.name}
              </Text>
              <Text>{item?.time}</Text>
            </View>
            <StarRating rating={item?.rating} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;
