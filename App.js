import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image } from 'react-native';
import { styles,textos} from './styles/styles'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={textos.Titulo}>
          Texto do meu titulo
        </Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={textos.description}>Segunda View</Text>
        </View>
        <Button title='bem vindo'></Button>
      </View>
    </View>
  );
}


