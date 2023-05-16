import { StatusBar } from 'expo-status-bar';
import {  Text, View ,Button,Linking,Image} from 'react-native';
import logo from './images/gatito.webp';
import tomate from './images/tomate.png'
import { styles,styleTexto,styleImages } from './styles/styles';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styleTexto.titulo}>My first app!</Text>
      <View>
        <Text  style={styleTexto.subTitutlo}>Olá tudo bem? </Text>
      </View>
      <View>
        <Image source={logo} style={styleImages.padrao}/>
        <Button
          title="Ir para o meu github"
          onPress={()=>{Linking.openURL('https://github.com/JulioVianaDev')}}
        />
      </View>
      <View>
        <Text  style={styleTexto.texto}>
          Sou um desenvolvedor fullstack e estou em busca de aprender javascript
        </Text>
      </View>
      <View>          
        <Image
          source={tomate}
          style={styleImages.padrao}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


