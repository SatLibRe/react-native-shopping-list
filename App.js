/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native"; 

const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Happy Miles Day!</Text>
      <Image style={style.img} source={{uri: "https://images-na.ssl-images-amazon.com/images/I/61hQylG0ysL._SX466_.jpg"}} /> 
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: "blue", 
    fontSize: 10
  },
  img: {
    width: 100,
    height: 100 , 
    borderRadius: 100 /2,
    borderWidth: 2
  }
})

export default App