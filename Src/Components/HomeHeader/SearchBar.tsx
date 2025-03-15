import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Sizes } from "../../StylesComponent/Constant";
import { headerStyl } from "../../StylesComponent/HeadersStyle";
import RollingText from "react-native-rolling-bar";

const placeholderText: string[] = [
  'Search "Pizza"',
  'Search "Sharwama"',
  'Search "Burger"',
  'Search "Cakes"',
];

const SearchBar = () => {
  return (
    <View>
      <SafeAreaView />
      <View style={[headerStyl.flexRowBetween, { padding: 10 }]}>
        <TouchableOpacity style={headerStyl.searchBarContainer}>
          <Ionicons name="search" color={Colors.red} size={Sizes.xlg} />
          <RollingText
            defaultStyle={false}
            interval={3000}
            customStyle={headerStyl.rollingTextContainer}
          >
            {placeholderText?.map((txt, id) => (
              <Text style={{ fontSize: 13, fontWeight: "bold" }} key={id}>
                {txt}
              </Text>
            ))}
          </RollingText>
          <Ionicons name="mic" size={Sizes.xlg} color={Colors.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
