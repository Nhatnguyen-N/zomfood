import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";
import { fetchAllFrequentFood } from "../../Hooks/HomeHooks/fetchFrequentFood";
import { renderFoodItemParams } from "../../TypeCheck/HomeProp";

type Props = {};

const FrequentFood = (props: Props) => {
  const { food } = fetchAllFrequentFood();

  const renderFoodItem = ({ item }: renderFoodItemParams) => (
    <FoodCard
      foodProps={{
        _id: item._id,
        name: item.name,
        imageUrl: item.imageUrl,
      }}
      foodStyleProps={{
        width: 70,
        height: 70,
        radius: 99,
        resizeMode: "contain",
      }}
    />
  );
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={food}
        renderItem={renderFoodItem}
        numColumns={Math.ceil(food?.length / 2)}
        key={Math.ceil(food?.length / 2)}
        pagingEnabled={false}
        keyExtractor={(item) => item?._id?.toString()}
      />
    </ScrollView>
  );
};

export default FrequentFood;
