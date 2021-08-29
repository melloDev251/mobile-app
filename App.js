import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Pressable, View } from "react-native";
import { Learn } from "./components/Learn";
import { TextThemed } from "./components/TextThemed";
import ScreenA from "./components/ScreenA";
import ScreenB from "./components/ScreenB";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Screen_A"
            component={ScreenA}
            options={{
              title: "Ecran A",
              drawerIcon: ({ focused }) => (
                <FontAwesome5 name="btc" size={focused ? 25 : 20} color={focused ? "red" : "blue"} />
              ),
            }}
          />
          <Drawer.Screen name="Screen_B" component={ScreenB} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
