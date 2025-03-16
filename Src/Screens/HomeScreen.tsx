import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../Navigation/TabsNavigation";
import { headerStyl } from "../StylesComponent/HeadersStyle";
import HeadersComponent from "../Components/HomeHeader/HeadersComponent";
import SectionListContent from "../Components/HomeSectionList/SectionListContent";

const HomeScreen = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
  return (
    <View style={headerStyl.homeContainer}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      />
      <View>
        <View style={headerStyl.homeHeader}>
          <HeadersComponent />
        </View>
      </View>
      <View>
        <SectionListContent />
      </View>
    </View>
  );
};

export default HomeScreen;
