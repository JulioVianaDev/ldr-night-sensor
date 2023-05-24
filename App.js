import React, { useState } from 'react';
import { View, ScrollView,   ImageBackground, StyleSheet} from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import { screenHeight } from './util/screen';
import { styles } from './styles/styles';
import { BarraPesquisa } from './components/BarraPesquisa';
import { Sessao } from './components/Sessao';
export default function App() {

  const [lista, setLista] = useState([]);
  useEffect(()=>{
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
     .then(res=>setLista(res.data))
     .catch(erro=>console.log(erro))
  },[])
  const [background, setBackground] = useState('https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7');
 

  
 return (
   <ScrollView style={styles.container}>
     <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
          <ImageBackground
            source={{ uri: background}}
            style={styles.imgBg}
            blurRadius={8}
          >
            <View style={styles.overlay}/>
            <BarraPesquisa/>
          
          <Sessao
            lista={lista}
            setBackground={setBackground}
          />
       
          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}
