import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../Navigation/TabsNavigation";
import { headerStyl } from "../StylesComponent/HeadersStyle";
import HeadersComponent from "../Components/HomeHeader/HeadersComponent";
import SectionListContent from "../Components/HomeSectionList/SectionListContent";
import { useSharedContext } from "../Context/SharedContext";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const HomeScreen = ({ navigation, route }: TabsStackScreenProps<"Home">) => {
  const { globallScrollY } = useSharedContext();
  const scrollingUpAnim = useAnimatedStyle(() => {
    const transY = interpolate(
      globallScrollY.value,
      [0, 50],
      [0, -50],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY: transY }],
    };
  });
  return (
    <View style={headerStyl.homeContainer}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 40 : 0,
        }}
      />
      <Animated.View style={[scrollingUpAnim]}>
        <View style={headerStyl.homeHeader}>
          <HeadersComponent />
        </View>
      </Animated.View>
      <Animated.View style={[scrollingUpAnim]}>
        <SectionListContent />
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
