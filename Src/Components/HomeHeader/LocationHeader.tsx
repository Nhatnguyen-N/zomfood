import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { headerStyl } from "../../StylesComponent/HeadersStyle";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Sizes } from "../../StylesComponent/Constant";
import { TouchableOpacity } from "react-native";
type Props = {};

const LocationHeader = (props: Props) => {
  return (
    <View>
      <SafeAreaView />
      <View style={headerStyl.locationContainer}>
        <View style={headerStyl.locationContainer}>
          <Ionicons name="location" size={Sizes.xxl} color={Colors.red} />
          <View>
            <TouchableOpacity style={headerStyl.userNameContainer}>
              <Text style={headerStyl.userName}>rioy ayra</Text>
              <Ionicons
                name="chevron-down"
                color={Colors.black}
                size={Sizes.s}
              />
            </TouchableOpacity>
            <Text style={headerStyl.userLocationText}>
              North artic region India
            </Text>
          </View>
        </View>
        <View style={headerStyl.menuBarContainer}>
          <TouchableOpacity style={headerStyl.userNameContainer}>
            <Ionicons name="menu" color={Colors.black} size={Sizes.xxl} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LocationHeader;
