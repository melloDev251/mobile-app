import React from "react";
import { Pressable, View } from "react-native";
import { TextThemed } from "./TextThemed";

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_B");
  };
  return (
    <View>
      <TextThemed>Screen A</TextThemed>
      <Pressable onPress={onPressHandler}>
        <TextThemed>Go to Screen B</TextThemed>
      </Pressable>
    </View>
  );
}
