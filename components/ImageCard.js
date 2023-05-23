import { Image,View,Text } from 'react-native'
import { useState } from 'react'
import { imageCard } from '../styles/styles'
export const ImageCard = ({cartoon})=>{
    const [imageError,setImageError] = useState(false)
    
    const handleError = () => {
        setImageError(true);
    };
    return(

        <View>
            <Text>{cartoon.title}</Text>
            <Image
                style={imageCard.image}
                source={!imageError ? { uri: cartoon.image } : require('../images/erroImage.png')}
                onError={handleError}
            />
          </View>
    )
}