import { View, Text, FlatList } from "react-native";
import React from "react";
import { restaurantStyle } from "../../StylesComponent/CardStyle";
import { renderRestaurantParams } from "../../TypeCheck/TypeParams";
import RestaurantCard from "../RestaurantCard";
import { fetchRestaurant } from "../../Hooks/HomeHooks/fetchRestaurants";

const RestaurantSection = () => {
  const { restaurant } = fetchRestaurant();
  const renderRestaurants = ({ item }: renderRestaurantParams) => (
    <RestaurantCard item={item} />
  );
  return (
    <View>
      <Text style={restaurantStyle.restaurantAddress}>
        300 Restaurants delivering to you
      </Text>
      <Text style={restaurantStyle.restaurantAddress}>FEATURED</Text>
      <FlatList
        data={restaurant}
        renderItem={renderRestaurants}
        keyExtractor={(item) => item?._id?.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantSection;
