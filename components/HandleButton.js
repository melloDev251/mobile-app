import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { TextThemed } from "./TextThemed";

export const HandleButton = (props) => {
    return (
      <Pressable
        onPress={props.handlePressFunction}
        style={{
          backgroundColor: "#cccccc",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        android_ripple={{ color: "#fff" }}
      >
          <TextThemed>OK</TextThemed>
      </Pressable>
    );
  };