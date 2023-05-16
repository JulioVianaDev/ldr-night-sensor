import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import { styles } from './styles/styles';
import { useState } from 'react';
export default function App() {
  const [logado,setLogado] = useState(false)
  function logar() {
    setLogado(true);
  }
  function deslogar() {
    setLogado(false);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.texto}>opa</Text>
    </View>
  );
}