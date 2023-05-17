import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View,Button, Linking,Image, TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import {globalStyle} from './styles/styles'
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
      <Text  style={globalStyle.letter}>meu texto</Text>
    </SafeAreaView>
  );
}