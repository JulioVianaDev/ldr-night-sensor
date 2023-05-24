import { styles } from "../styles/styles";
import { Text,View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { useRef,useState } from "react";
import { ImageCard } from "./ImageCard";
import { screenWidth } from "../util/screen";
export const Sessao = ({lista,setBackground,title})=>{
    
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <>
            <Text 
                style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
                marginLeft: 10, marginVertical: 10, }}
            >
                {title}
            </Text>

            <View style={styles.slideView}>
                <Carousel
                    style={styles.carousel}
                    ref={carouselRef}
                    data={lista}
                    renderItem={ImageCard}
                    sliderWidth={screenWidth}
                    itemWidth={200}
                    inactiveSlideOpacity={0.5}
                    onSnapToItem={ (index) => {
                        setBackground(lista[index].image);
                        setActiveIndex(index);
                    }}
                />  
            </View>
        </>
    )
}