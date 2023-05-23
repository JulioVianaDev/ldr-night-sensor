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

  const [lista, setLista] = useState([]);
  useEffect(()=>{
    axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
     .then(res=>setLista(res.data))
     .catch(erro=>console.log(erro))
  },[])
  const [background, setBackground] = useState();
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
                  setBackground(lista[index].image);
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
