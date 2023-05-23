import React, { useState, useRef } from 'react';
import { View, ScrollView, Text,  ImageBackground, StyleSheet,
  TextInput, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { screenWidth,screenHeight } from './util/screen';
import { styles } from './styles/styles';
export default function App() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
        title:"O Justiceiro",
        text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
        release: 2018,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
        title:"Bad Boys for life",
        text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
        title:"Viúva Negra",
        text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
        title:"Top Gun: MAVERICK",
        text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
        title:"BloodShot",
        text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
        title:"Free Guy",
        text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);
  useEffect(()=>{
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
     .then(res=>setLista(res.data))
     .catch(erro=>console.log(erro))
  },[])
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => { 
    return(
    <View>
      <TouchableOpacity>
        <Image
        source={{uri: item.image}}
        style={styles.carouselImg}
        />
        <Text style={styles.carouselText}>{item.title}</Text>
        <Icon 
          name="play-circle-outline" 
          size={30} color="#FFF" 
          style={styles.carouselIcon} 
        />
      </TouchableOpacity>
    </View>
  );
  };

 return (
   <ScrollView style={styles.container}>
     <View style={{flex:1, height: screenHeight}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>  
          <ImageBackground
          source={{ uri: background}}
          style={styles.imgBg}
          blurRadius={8}
          >

            <View style={styles.viewSearch}>
              <TextInput
                style={styles.input}
                placeholder="Procurando algo?"
              />
              <TouchableOpacity style={styles.icon}>
                <Icon name="search" color="#000" size={25} />
              </TouchableOpacity>
            </View>

            <Text 
              style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
              marginLeft: 10, marginVertical: 10, }}
            >
              Acabou de chegar
            </Text>

            <View style={styles.slideView}>
              <Carousel
              style={styles.carousel}
              ref={carouselRef}
              data={lista}
              renderItem={_renderItem}
              sliderWidth={screenWidth}
              itemWidth={200}
              inactiveSlideOpacity={0.5}
              onSnapToItem={ (index) => {
                setBackground(lista[index].img);
                setActiveIndex(index);
              }}
              />
            </View>
          </ImageBackground>
        </View>
     </View>
   </ScrollView>
  );
}
