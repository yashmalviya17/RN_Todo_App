import React from "react";
import { Text, StyleSheet,TextInput, View} from "react-native";
import Input from "../components/Input";
import List from "../components/List";

const HomeScreen = () => {
  return <View>
    <Input />
    <List />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
