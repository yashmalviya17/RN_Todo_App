import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({list,setList}) => {
  const [todo, setTodo] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        value={todo}
        placeholder="Enter Work Here!"
        keyboardType="default"
        onChangeText={(value) => {
          setTodo(value);
        }}
        onSubmitEditing={()=>{
            setList([...list,todo])
            setTodo("")
        }} 
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderRadius: 6,
    elevation:5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom:5
  },
});
