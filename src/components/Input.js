import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = () => {
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
            
        }} 
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    margin: 10,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 18,
    backgroundColor: "white",
    marginBottom:0
  },
});
