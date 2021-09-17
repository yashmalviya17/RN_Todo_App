import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const List = ({todo,index,list,setList}) => {
  const deleteHandler = () => {
        const newList = [...list]
        newList.splice(index,1)
        setList(newList)
  }
  return (
    <View style={styles.list}>
      <Text style={{ flex: 3,fontSize:16 }}>{todo}</Text>
      <TouchableOpacity onPress={()=>{
        deleteHandler()
      }}  >
        <Icon
          name="close"
          color="white"
          size={20}
          style={{
            borderRadius: 50,
            padding: 2,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "grey",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    marginVertical: 5,
  },
});
