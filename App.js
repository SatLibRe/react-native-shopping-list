/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from "react-native"; 
import Header from "./components/Header.js"; 
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem.js"

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: "Milk" },
    {id: 2, text: "Eggs" },
    {id: 3, text: "Choc0late" },
    {id: 4, text: "Pecan pah-pah-PIE" },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => id != item.id)
    })
  }

  const addItem = (text) => {
    if(text.length > 0){
      setItems(prevItems => {
        return [...prevItems, {id: Math.floor(Math.random() * 10), text }]
      })
    } else {
      alert("The item can not be blank")
    }
  }


  return (
    <View style={styles.container}>
      <Header title="Passed Down Title"/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem deleteItem={deleteItem} item={item}/>} 
      /> 
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App