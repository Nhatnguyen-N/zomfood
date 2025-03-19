import { View, Text } from "react-native";
import React from "react";
import { SharedContextProvider } from "../Context/SharedContext";
import TabsNavigator from "./TabsNavigation";

type Props = {};

const BottomTabsAnimation = (props: Props) => {
  return (
    <SharedContextProvider>
      <TabsNavigator />
    </SharedContextProvider>
  );
};

export default BottomTabsAnimation;
