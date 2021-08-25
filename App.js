import { StatusBar } from "expo-status-bar";
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
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
    { name: "Item 5" },
    { name: "Item 6" },
    { name: "Item 7" },
    { name: "Item 8" },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { name: "Item 70" }]);
    setRefreshing(false);
  };

  const DATA = [
    {
      title: "Title 1",
      data: ["Item 1-1", "Item 1-2", "Item 1-3"],
    },
    {
      title: "Title 2",
      data: ["Item 2-1", "Item 2-2", "Item 2-3"],
    },
    {
      title: "Title 3",
      data: ["Item 3-1", "Item 3-2", "Item 3-3"],
    },
    {
      title: "Title 4",
      data: ["Item 4-1", "Item 4-2", "Item 4-3"],
    },
  ];

  return (
    <>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({ item }) => (
          // <View style={styles.item}>
          // </View>
            <Text style={styles.text}> {item} </Text>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.text}> {section.title} </Text>
          </View>
        )}
      />
      {/* <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item} >
            <Text style={styles.text}> {item.name} </Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff00ff"]}
          />
        }
      /> */}

      {/* <ScrollView
        horizontal={false}
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#ff00ff"]}
          />
        }
      >
        {items.map((object) => {
          return (
            <View style={styles.item} >
              <Text style={styles.text}> {object.name} </Text>
            </View>
          );
        })}
      </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  item: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: "#000000",
    fontSize: 50,
    fontStyle: "italic",
  },
});
