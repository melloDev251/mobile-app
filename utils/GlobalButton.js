import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

export const GlobalButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      // style={({ pressed }) => [
      //   { backgroundColor: pressed ? "#dddddd" : "#00ff0f0f" },
      //   styles.button,
      // ]}
      style={styles.button}
      backgroundColor={props.backgroundColor}
    >
      <Text style={styles.title}> {props.title} </Text>
    </Pressable>
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
    marginBottom: 10,
  },
  title: {
    margin: 5,
    fontSize: 14,
    color: "#fff",
  },
});
