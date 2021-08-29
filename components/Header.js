import React from "react";
import { View, Text } from "react-native";

export const Header = (props) => {
  return (
    <View
      style={{
        width: 3500,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00ff0f0f",
      }}
    >
      <Text>Learning React Native</Text>
    </View>
  );
};
