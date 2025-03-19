import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { menuFilterParams } from "../../TypeCheck/TypeParams";
import { secStyl } from "../../StylesComponent/SectionListStyles";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Colors } from "../../StylesComponent/Constant";

const MenuFilterTab = ({ filterLabel, tabList }: menuFilterParams) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={secStyl.filterBarContainer}
    >
      <TouchableOpacity style={secStyl.filterContent}>
        <View style={{ transform: [{ rotate: "90deg" }] }}>
          <MaterialCommunityIcons
            name="tune-vertical-variant"
            size={15}
            color={Colors.black}
          />
        </View>
        <Text style={secStyl.filterLabel}>{filterLabel}</Text>
        <Ionicons name="caret-down" size={15} color={Colors.black} />
      </TouchableOpacity>
      {tabList?.map((list) => (
        <TouchableOpacity key={list._id} style={secStyl.filterContent}>
          <Text style={secStyl.filterLabel}>{list.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default MenuFilterTab;
