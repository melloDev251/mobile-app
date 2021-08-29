import React, { useState } from "react";
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ToastAndroid,
  Modal,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { CustomButton } from "./CustomButton";
import { TextThemed } from "./TextThemed";
import { HandleButton } from "./HandleButton";
import { Header } from "./Header";

export const Learn = (props) => {
  const [name, setName] = useState("");
  const [btn, setBtn] = useState(false);
  const [show, setShow] = useState(false);
  const handlePress = () => {
    if (name.length > 3) {
      setBtn(!btn);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <Modal
          visible={show}
          onRequestClose={() => setShow(false)}
          transparent
          animationType="slide"
          hardwareAccelerated
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View
                style={{
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffcc00",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <TextThemed>WARNING !</TextThemed>
              </View>
              <View
                style={{
                  height: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextThemed>The name must be longer 3 characters</TextThemed>
              </View>

              <HandleButton handlePressFunction={() => setShow(false)} />
            </View>
          </View>
        </Modal>
        <TextThemed>Please write your name :</TextThemed>
        <TextInput
          style={styles.input}
          placeholder="e.g Mello"
          onChangeText={(value) => setName(value)}
        />

        <CustomButton
          onPressFunction={handlePress}
          title={btn ? "Clear" : "Submit"}
        />

        {btn ? (
          <View style={styles.container}>
            <Text style={styles.text}>You are registered as {name} </Text>
            <Image
              source={require("../assets/success-icon.jpg")}
              style={{ width: 100, height: 100, margin: 20 }}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            source={{
              uri: "https://img.lovepik.com/element/40030/1478.png_860.png",
            }}
            style={{ width: 100, height: 100, margin: 20 }}
            resizeMode="stretch"
            blurRadius={1}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
  },
  item: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "#000000",
    // fontSize: 50,
    fontSize: 16,
    fontStyle: "italic",
    margin: 15,
    textAlign: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 2,
    textAlign: "center",
    marginBottom: 10,
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
});
