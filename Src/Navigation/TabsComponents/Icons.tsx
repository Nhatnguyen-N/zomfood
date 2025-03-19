import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

export const Icons: {
  [key: string]: ({ color }: { color: string }) => ReactNode;
} = {
  Home: ({ color }: { color: string }) => (
    <Entypo name="home" size={24} color={color} />
  ),
  Cart: ({ color }: { color: string }) => (
    <AntDesign name="shoppingcart" size={24} color={color} />
  ),
  Profile: ({ color }: { color: string }) => (
    <Ionicons name="person" size={24} color={color} />
  ),
  Settings: ({ color }: { color: string }) => (
    <Ionicons name="copy" size={24} color={color} />
  ),
};
