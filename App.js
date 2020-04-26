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
      <Text style={style.text}>Happy Birthday!</Text>
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
  }
})

export default App