import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native'

const List = () => {
    return (
        <View style={styles.list} >
           <Text> Hello World </Text> 
           <Text> X </Text> 
          
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    list:{
    display:"flex",
    margin: 10,
    borderRadius: 12,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 2,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "white",
    }
})
