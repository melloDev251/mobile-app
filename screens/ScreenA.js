import React from "react";
import { Pressable, View, Text } from "react-native";
import { TextThemed } from "../components/TextThemed";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function ScreenA({ navigation }) {

  let [fontsLoaded, error] = useFonts({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    "Jose-Fin":require("../assets/fonts/JosefinSans-Bold.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressHandler = () => {
    navigation.navigate("Screen_B", {
      ItemName: "Screen A item name",
      ItemID: 12,
    });
    // navigation.openDrawer()
  };
  return (
    <View>
      <TextThemed>Screen A</TextThemed>
      <Pressable onPress={onPressHandler}>
        <TextThemed>
          {" "}
          Go to Screen B <FontAwesome5 name="arrow-circle-right" size={15} />
        </TextThemed>
      </Pressable>
      <Text
        style={{
          fontFamily: "Jose-Fin",
          fontSize: 40,
        }}
      >
        Test fonts
      </Text>
    </View>
  );
}
