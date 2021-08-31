import React from "react";
import { Pressable, View, Text } from "react-native";
import { TextThemed } from "../components/TextThemed";

export default function ScreenB({ navigation, route }) {
  const { ItemName, ItemID } = route.params;
  return (
    <View>
      <TextThemed>Screen B</TextThemed>
      <TextThemed> {ItemName} </TextThemed>
      <TextThemed> ID: {ItemID} </TextThemed>
      <Text style={{fontFamily:"DancingScript-Regular"}} >Just Test Fonts</Text>
    </View>
  );
}
