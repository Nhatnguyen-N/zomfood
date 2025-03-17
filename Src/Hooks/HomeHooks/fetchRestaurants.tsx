import { useCallback, useEffect, useState } from "react";

import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import {
  fetchRestaurantParams,
  restaurantParams,
} from "../../TypeCheck/TypeParams";

const url = "http://192.168.1.11:8082/";
export const fetchRestaurant = () => {
  const [restaurant, setRestaurant] = useState<restaurantParams[]>([]);
  const fetchRestaurants = async () => {
    const restaurantRoute = "restaurant/getAllRestaurant";

    try {
      const response: fetchRestaurantParams = await axios.get(
        url + restaurantRoute
      );
      const { result } = response.data;
      if (response && result) {
        setRestaurant(result);
      }
    } catch (e) {
      console.log("Couldn't fetch restaurant");
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchRestaurants();
    }, [])
  );
  return { restaurant };
};
