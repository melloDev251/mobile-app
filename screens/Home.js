import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { Pressable, View, Text, StyleSheet, Alert } from "react-native";
import { GlobalButton } from "../utils/GlobalButton";
import { GlobalTextInput } from "../utils/GlobalTextInput";

export default function Home({ navigation, route }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning! Please write your data");
    } else {
      try {
        var user = {
          Name: name,
        };
        await AsyncStorage.mergeItem("UserData", JSON.stringify(user));
        Alert.alert("Success! Your data has been updated");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
      // setName("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={{ marginBottom: 20, marginTop: 20 }}>
        Welcome {name} ! Your age is {age}{" "}
      </Text>
      <GlobalTextInput value={name} onChangeText={(value) => setName(value)} />
      <GlobalButton
        title="Update"
        onPressFunction={updateData}
        backgroundColor={"orange"}
      />
      <GlobalButton
        title="Delete"
        onPressFunction={removeData}
        backgroundColor={"red"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
});
