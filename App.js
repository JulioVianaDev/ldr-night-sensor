import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Linking,Image} from 'react-native';
import logo from './images/gatito.webp';
import tomate from './images/tomate.png'
export default function App() {
  return (
    <View style={styles.container}>
      <Text>My first app!</Text>
      <View>
        <Text>Olá tudo bem? </Text>
      </View>
      <View>
        <Image source={logo} style={{width: 250,height:250}}/>
        <Button
          title="Ir para o meu github"
          onPress={()=>{Linking.openURL('https://github.com/JulioVianaDev')}}
        />
      </View>
      <View>
        <Text>
          Sou um desenvolvedor fullstack e estou em busca de aprender javascript
        </Text>
      </View>
      <View>          
        <Image
          source={tomate}
          style={{width: 250,height:250}}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
