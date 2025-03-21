import { NavigatorScreenParams } from "@react-navigation/native";
import React from "react";
import TabsNavigator, { TabsStackParams } from "./TabsNavigation";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import BottomTabsAnimation from "./BottomTabsAnimation";

export type RootStackParams = {
  TabsStack: NavigatorScreenParams<TabsStackParams>;
};
const RootStack = createNativeStackNavigator<RootStackParams>();

export type RootStackScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={BottomTabsAnimation}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
