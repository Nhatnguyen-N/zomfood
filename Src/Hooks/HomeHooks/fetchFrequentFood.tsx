import { useCallback, useEffect, useState } from "react";
import {
  fetchFrequentFood,
  frequentFoodParams,
} from "../../TypeCheck/HomeProp";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const url = "http://192.168.1.11:8082/";
export const fetchAllFrequentFood = () => {
  const [food, setFood] = useState<frequentFoodParams[]>([]);
  const fetchFood = async () => {
    const foodRoute = "frequent//getAllFrequentFood";

    try {
      const response: fetchFrequentFood = await axios.get(url + foodRoute);
      const { result } = response.data;
      if (response && result) {
        setFood(result);
      }
    } catch (e) {
      console.log("Couldn't fetch frequent food");
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  useFocusEffect(useCallback(() => {}, []));
  return { food };
};
