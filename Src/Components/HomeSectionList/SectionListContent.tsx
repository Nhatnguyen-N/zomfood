import {
  View,
  Text,
  SectionList,
  ViewToken,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef, useState } from "react";
import FrequentFoodSection from "./FrequentFoodSection";
import RestaurantSection from "./RestaurantSection";
import { secStyl } from "../../StylesComponent/SectionListStyles";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import MenuFilterTab from "./MenuFilterTab";
import { filterTabList } from "../../Data/FilterTabList";
import { useSharedContext } from "../../Context/SharedContext";
import GotoTopButton from "../HomeHeader/GotoTopButton";
import { gotoTopStyles } from "../../StylesComponent/CardStyle";
const sectionListData = [
  {
    title: "Frequent Food",
    data: [{}],
    renderItem: () => <FrequentFoodSection />,
  },
  {
    title: "Restaurant",
    data: [{}],
    renderItem: () => <RestaurantSection />,
  },
];

const SectionListContent = () => {
  const { scrollY, globallScrollY, scrollToTop } = useSharedContext();
  const sectionListRef = useRef<SectionList>(null);
  const prevScrollY = useRef(0);
  const scrollToTopPreviousValue = useRef<number>(0);

  const [isRestaurantSection, setIsRestaurantSection] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY.current;

    scrollY.value = isScrollingDown
      ? withTiming(1, { duration: 300 })
      : withTiming(0, { duration: 300 });
    prevScrollY.current = currentScrollY;
    globallScrollY.value = currentScrollY;

    const contentHeight = event.nativeEvent.contentSize.height;
    const layoutHt = event.nativeEvent?.layoutMeasurement?.height;
    const scrollOffset = event?.nativeEvent?.contentOffset?.y;

    setNearEnd(scrollOffset + layoutHt >= contentHeight - 500);
  };

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
  };
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    const isRestaurantSection = viewableItems.some(
      (item) => item?.section?.title === "Restaurant" && item?.isViewable
    );
    setIsRestaurantSection(isRestaurantSection);
  };
  const handleScrollToTop = async () => {
    gotoTop();
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };

  const animGotoTop = useAnimatedStyle(() => {
    const isScrollingUp =
      globallScrollY?.value < scrollToTopPreviousValue.current &&
      globallScrollY.value > 170;
    const opacity = withTiming(
      isScrollingUp && (isRestaurantSection || nearEnd) ? 1 : 0,
      { duration: 300 }
    );
    const transY = withTiming(
      isScrollingUp && (isRestaurantSection || nearEnd) ? 1 : 10,
      { duration: 300 }
    );

    scrollToTopPreviousValue.current = globallScrollY.value;
    return {
      opacity,
      transform: [{ translateY: transY }],
    };
  });
  const gotoTop = async () => {
    scrollY.value = withTiming(0, { duration: 300 });
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };
  return (
    <>
      <Animated.View
        style={[animGotoTop, gotoTopStyles.gotoTopButtonContainer]}
      >
        <GotoTopButton onPress={handleScrollToTop} />
      </Animated.View>
      <SectionList
        ref={sectionListRef}
        sections={sectionListData}
        keyExtractor={(item, idx) => idx.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={secStyl.sectionListContainer}
        renderSectionHeader={({ section }) => {
          if (section.title !== "Restaurant") {
            return null;
          }
          return (
            <Animated.View
              style={[
                isRestaurantSection || nearEnd ? secStyl.sickyHeaderBg : null,
              ]}
            >
              <MenuFilterTab filterLabel="Sort" tabList={filterTabList} />
            </Animated.View>
          );
        }}
        bounces={false}
        overScrollMode="always"
        nestedScrollEnabled={false}
        stickySectionHeadersEnabled={true}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    </>
  );
};

export default SectionListContent;
