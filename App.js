import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View,Button, FlatList,Image, TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import {globalStyle,imageCard} from './styles/styles'
import { ImageCard } from './components/ImageCard';
import axios from 'axios'
export default function App() {
  const [listOfCartoons,setListOfCartoons] = useState([])
  
  useEffect(()=>{
     axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
      .then(res=>setListOfCartoons(res.data))
      .catch(erro=>console.log(erro))
  },[])

  return (
    <SafeAreaView  style={globalStyle.body}>
      <FlatList
        data={listOfCartoons}
        renderItem={({item})=>
          <ImageCard
            cartoon={item}
          />
        }
      />
    </SafeAreaView>
  );
}