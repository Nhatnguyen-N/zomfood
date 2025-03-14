import { View, Text } from "react-native";
import React from "react";
import { TabsStackScreenProps } from "../Navigation/TabsNavigation";

type Props = {};

const Settings = ({ navigation, route }: TabsStackScreenProps<"Settings">) => {
  return (
    <View>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default Settings;
