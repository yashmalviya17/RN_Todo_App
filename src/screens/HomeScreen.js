import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Input from "../components/Input";
import List from "../components/List";

const HomeScreen = () => {
  const [list, setList] = useState([]);
  return (
    <View>
      <Input list={list} setList={setList} />
      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <List 
          todo={item} 
          index={index} 
          setList={setList} 
          list={list} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: "blue",
  },
});

export default HomeScreen;
