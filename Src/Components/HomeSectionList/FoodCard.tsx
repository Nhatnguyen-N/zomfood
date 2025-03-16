import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { cardStyle } from "../../StylesComponent/CardStyle";
import { foodCardParams } from "../../TypeCheck/HomeProp";

type Props = {};

const FoodCard = ({ foodProps, foodStyleProps }: foodCardParams) => {
  return (
    <View>
      <TouchableOpacity
        style={cardStyle.categoryContentContainer}
        key={foodProps._id}
        onPress={foodProps.onPress}
      >
        {foodProps?.imageUrl !== undefined && (
          <View style={cardStyle.imageContainer}>
            <Image
              source={{ uri: foodProps?.imageUrl[0] }}
              style={
                sty(
                  foodStyleProps.width,
                  foodStyleProps.height,
                  foodStyleProps.radius
                ).imgStyleProps
              }
              resizeMode={foodStyleProps?.resizeMode}
            />
          </View>
        )}
        <Text style={cardStyle.catName} numberOfLines={2}>
          {foodProps?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoodCard;

const sty = (width?: number, height?: number, radius?: number) => ({
  imgStyleProps: {
    width,
    height,
    borderRadius: radius,
  },
});
