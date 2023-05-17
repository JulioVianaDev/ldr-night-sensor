import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View,Button, Linking,Image, TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import {globalStyle} from './styles/styles'
export default function App() {
  
  return (
    <SafeAreaView  style={globalStyle.body}>
      <Text  style={globalStyle.letter}>oi</Text>
    </SafeAreaView>
  );
}