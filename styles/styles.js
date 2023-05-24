import { StyleSheet } from "react-native";
import { screenWidth,screenHeight } from '../util/screen';
export const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    imgBg:{
      flex:1,
      width: null,
      height: null,
      opacity: 1,
      justifyContent: "flex-start",
      backgroundColor: '#000'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: `rgba(0, 0, 0, 0.3)`,
    },
    viewSearch:{
      marginTop: 40,
      backgroundColor: '#FFF',
      elevation: 10,
      borderRadius: 5,
      marginVertical: 10,
      width: '95%',
      flexDirection: 'row',
      alignSelf: 'center'
    },
    input:{
      width: '90%',
      padding: 13,
      paddingLeft: 20,
      fontSize: 17,
    },
    icon:{
      position: 'absolute',
      right: 20,
      top: 15,
    },
    slideView:{
      width: '100%',
      height: 350,
      justifyContent: 'center',
      alignItems: 'center'
    },
    carousel:{
      flex:1,
      overflow: 'visible'
    },
    carouselImg:{
      alignSelf: 'center',
      width: 200,
      height: 300,
      borderRadius: 12,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    carouselText:{
      padding: 15,
      color: '#FFF',
      position: 'absolute',
      bottom: 10,
      left: 2,
      fontWeight: 'bold'
    },
    carouselIcon:{
      position:'absolute',
      top: 15,
      right: 15,
    },
    movieTitle:{
      paddingLeft: 15,
      fontSize: 22,
      fontWeight: 'bold',
      color: '#131313',
      marginBottom: 5,
    }
  });