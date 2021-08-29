import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export const TextThemed = (props) => {
  return <Text style={styles.text} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    // fontSize: 50,
    fontSize: 16,
    fontStyle: "italic",
    margin: 15,
    textAlign: "center",
  },
});
