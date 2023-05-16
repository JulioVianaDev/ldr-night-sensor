import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import {styles,textos,linhas} from './styles/styles';
export default function App() {
  return (
    <View style={styles.body}>
      <View style={linhas.linha}>
        <View style={styles.view1}>
          <Text style={textos.description}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={textos.description}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={textos.description}>3</Text>
        </View>
      </View>
      <View style={linhas.linha}>
        <View style={styles.view4}>
          <Text style={textos.description}>4</Text>
        </View>
      </View>
      <View style={linhas.linha}>
        <View style={styles.view5}>
          <Text style={textos.description}>5</Text>
        </View>
      </View>
      <View style={linhas.superlinha}>
        <View style={styles.view6}>
          <Text style={textos.description}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={textos.description}>7</Text>
        </View>
      </View>
  </View>
  );
}