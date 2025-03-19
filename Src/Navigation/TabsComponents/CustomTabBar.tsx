import { View, Text, LayoutChangeEvent } from "react-native";
import React, { useEffect, useState } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "../../StylesComponent/Constant";
import TabsCard from "./TabsCard";
import { useSharedContext } from "../../Context/SharedContext";

type Props = {};

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { scrollY } = useSharedContext();

  const [dimesions, setDimensions] = useState({ height: 20, width: 100 });
  const indicatorWidth = dimesions.width / state.routes.length;

  // const onTabBarLayout = (e: LayoutChangeEvent) => {
  //   setDimensions({
  //     height: e.nativeEvent.layout.height,
  //     width: e.nativeEvent.layout.width,
  //   });
  // };

  const tabPositionX = useSharedValue(0);

  useEffect(() => {
    tabPositionX.value = withTiming(indicatorWidth * 3.8 * state.index, {
      duration: 300,
    });
  }, [state.index]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const transYanim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            scrollY.value === 1
              ? withTiming(100, { duration: 300 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });
  return (
    <>
      <Animated.View
        style={[
          transYanim,
          {
            width: "100%",
            height: 70,
            position: "absolute",
            bottom: 0,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            elevation: 5,
            shadowRadius: 11,
            shadowColor: "#000",
            zIndex: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <Animated.View
          style={[
            {
              position: "absolute",
              backgroundColor: "green",
              top: 0,
              left: 22,
              height: 5,
              width: indicatorWidth * 2,
            },
            animatedStyle,
          ]}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {state.routes.map((route, idx) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === idx;
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event?.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };
            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };
            return (
              <TabsCard
                key={route.name}
                onPress={onPress}
                onLongPress={onLongPress}
                isFocused={isFocused}
                routeName={route.name}
                label={label.toString()}
              />
            );
          })}
        </View>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;
