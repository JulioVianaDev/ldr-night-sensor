import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import { styles } from './styles/styles';
import { useState } from 'react';
import tomate from './images/tomate.png'
import gatito from './images/gatito.webp'
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
      {
        logado
          ?<Button title='clique aqui para deslogar' onPress={()=>deslogar()}/>
          :<Button title='clique aqui para logar' onPress={()=>logar()}/>
      }
      {
        logado 
        ? <Image style={styles.images} source={tomate}/> 
        :<Image  style={styles.images} source={gatito}/>
      }
      
      <Text style={styles.texto}>Demonstração</Text>
    </View>
  );
}