import React from "react";
import { Pressable, View } from "react-native";
import { TextThemed } from "./TextThemed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ScreenA({ navigation }) {
  const onPressHandler = () => {
    navigation.navigate("Screen_B", {
      ItemName: "Screen A item name",
      ItemID: 12,
    });
    // navigation.openDrawer()
  };
  return (
    <View>
      <TextThemed>Screen A</TextThemed>
      <Pressable onPress={onPressHandler}>
        <TextThemed>
          {" "}
          Go to Screen B <FontAwesome5 name="arrow-circle-right" size={15} />
        </TextThemed>
      </Pressable>
    </View>
  );
}
