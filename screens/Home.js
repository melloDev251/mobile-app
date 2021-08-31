import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import { incrustAge, setAge, getCities } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { GlobalButton } from "../utils/GlobalButton";
import { GlobalTextInput } from "../utils/GlobalTextInput";

export default function Home({ navigation, route }) {
  const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  const { age, cities } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(getCities());
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
          let user = JSON.parse(value);
          setName(user.Name);
          // setAge(user.Age);
          dispatch(setAge(age));
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
      {/* <GlobalTextInput value={name} onChangeText={(value) => setName(value)} />
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
      <GlobalButton
        title="Increase Age -"
        onPressFunction={()=>{dispatch(incrustAge())}}
        backgroundColor={"black"}
      /> */}

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={cities}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.country} is cities in --&gt; {item.city}
            </Text>
          </View>
        )}
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
