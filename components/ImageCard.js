import { Image,View,Text,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles/styles'
export  const ImageCard = ({ item, index }) => { 
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
