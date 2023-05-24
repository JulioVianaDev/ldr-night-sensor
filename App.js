import React, { useState } from 'react';
import { View, ScrollView,Text,   ImageBackground, StyleSheet} from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import { screenHeight } from './util/screen';
import { styles } from './styles/styles';
import { BarraPesquisa } from './components/BarraPesquisa';
import { Sessao } from './components/Sessao';
export default function App() {

  const [listaOfCartoons, setListaOfCartoons] = useState([]);
  const [listaOfAnimations, setListaOfAnimations] = useState([]);
  const [listaOfClassics, setListaOfClassics] = useState([]);
  const [listaOfComedyMovies, setListaOfComedyMovies] = useState([]);
  useEffect(()=>{
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
     .then(res=>setListaOfCartoons(res.data))
     .catch(erro=>console.log(erro))
    axios.get('https://api.sampleapis.com/movies/animation')
      .then(res=>{
        var animationsApi = res.data
        for (var i = 0; i < res.data.length; i++) {
          animationsApi[i].image = animationsApi[i].posterURL;
          delete animationsApi[i].posterURL;
        }
        setListaOfAnimations(animationsApi)
      })
      .catch(erro=>console.log(erro))
    axios.get('https://api.sampleapis.com/movies/classic')
      .then(res=>{
        var animationsApi = res.data
        for (var i = 0; i < res.data.length; i++) {
          animationsApi[i].image = animationsApi[i].posterURL;
          delete animationsApi[i].posterURL;
        }
        setListaOfClassics(animationsApi)
      })
      .catch(erro=>console.log(erro))
    axios.get('https://api.sampleapis.com/movies/comedy')
      .then(res=>{
        var animationsApi = res.data
        for (var i = 0; i < res.data.length; i++) {
          animationsApi[i].image = animationsApi[i].posterURL;
          delete animationsApi[i].posterURL;
        }
        setListaOfComedyMovies(animationsApi)
      })
      .catch(erro=>console.log(erro))
  },[])
  const [background, setBackground] = useState('https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7');
 

  
 return (
  <View style={styles.container}>
  
      <View style={{flex:1, height: screenHeight}}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
            <ImageBackground
              source={{ uri: background}}
              style={styles.imgBg}
              blurRadius={8}
            > 
              <ScrollView>
                <View style={styles.overlay}/>
                <BarraPesquisa/>

                <Sessao
                  lista={listaOfCartoons}
                  setBackground={setBackground}
                  title='Cartoons'
                />
                <Sessao
                  lista={listaOfAnimations}
                  setBackground={setBackground}
                  title='Animações '
                />
                
                <Sessao
                  lista={listaOfClassics}
                  setBackground={setBackground}
                  title='Clássicos'
                />
                <Sessao
                  lista={listaOfComedyMovies}
                  setBackground={setBackground}
                  title='Comédia'
                />
              </ScrollView>
            </ImageBackground>
          </View>
      </View>
    
    </View>
    
  );
}
