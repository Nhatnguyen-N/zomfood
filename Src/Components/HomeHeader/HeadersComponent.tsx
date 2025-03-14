import { View, Text } from "react-native";
import React from "react";
import LocationHeader from "./LocationHeader";

type Props = {};

const HeadersComponent = (props: Props) => {
  return (
    <View>
      <LocationHeader />
    </View>
  );
};

export default HeadersComponent;
