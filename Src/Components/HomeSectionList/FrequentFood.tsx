import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import FoodCard from "./FoodCard";

type Props = {};

const FrequentFood = (props: Props) => {
  const renderFoodItem = () => <FoodCard />;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList data={category} renderItem={renderFoodItem} />
    </ScrollView>
  );
};

export default FrequentFood;
