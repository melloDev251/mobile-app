import React from "react";
import { Pressable, Text, StyleSheet, View, TextInput } from "react-native";

export const GlobalTextInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 15,
    // marginTop: 100,
    marginBottom: 20,
  },
});
