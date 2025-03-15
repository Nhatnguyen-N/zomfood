import { View, Text, SectionList } from "react-native";
import React from "react";
import FrequentFoodSection from "./FrequentFoodSection";
import RestaurantSection from "./RestaurantSection";

const sectionListData = [
  {
    title: "Frequent Food",
    data: [{}],
    renderItem: () => <FrequentFoodSection />,
  },
  {
    title: "Frequent Food",
    data: [{}],
    renderItem: () => <RestaurantSection />,
  },
];

const SectionListContent = () => {
  return (
    <>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </>
  );
};

export default SectionListContent;
