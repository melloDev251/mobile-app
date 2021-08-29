import React from "react";
import { Pressable, View } from "react-native";
import { TextThemed } from "./TextThemed";

export default function ScreenB({ navigation, route }) {
  const { ItemName, ItemID } = route.params;
  return (
    <View>
      <TextThemed>Screen B</TextThemed>
      <TextThemed> {ItemName} </TextThemed>
      <TextThemed> ID: {ItemID} </TextThemed>
    </View>
  );
}
