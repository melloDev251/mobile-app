import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { GlobalButton } from "../utils/GlobalButton";
import { GlobalTextInput } from "../utils/GlobalTextInput";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          navigation.navigate("Home")
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => { 
    if (name.length == 0 || age.length == 0) {
      Alert.alert("Warning! Please write your data");
    } else {
      try {
        var user = {
          Name:name,
          Age:age
        }
        await AsyncStorage.setItem("UserData", JSON.stringify(user));
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i1.wp.com/deeplylearning.fr/wp-content/uploads/2018/09/LOGO-V3-RESIZE.png?fit=600%2C600&ssl=1",
        }}
      />
      <Text style={{marginBottom:20}}>Async Storage Cours</Text>

      <GlobalTextInput
        onChangeText={(value) => setName(value)}
        placeholder={"Enter name"}
      />

      <GlobalTextInput
        onChangeText={(value) => setAge(value)}
        placeholder={"Enter age"}
      />

      <GlobalButton
        title="Login"
        onPressFunction={setData}
        backgroundColor={"green"}
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
  logo: {
    width: 100,
    height: 100,
    margin: 40,
    borderRadius: 50,
  },
});
