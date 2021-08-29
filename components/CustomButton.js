import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";


export const CustomButton = (props) => {
  return (
    <>
      <Pressable
        onPress={props.onPressFunction}
        android_ripple={{ color: "#fff" }}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dddddd" : "#00ff0f0f" },
          styles.button,
        ]}
      >
        <Text style={{ margin: 5, fontSize: 14 }}>{props.title}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 30,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1.2)",
  },
});
