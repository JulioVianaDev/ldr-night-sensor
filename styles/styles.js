import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f7ff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
    view1: {
      backgroundColor: '#00ffff',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item:{
      margin:10,
      backgroundColor: '#ff2ff2',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }
  });
  
  export const textos = StyleSheet.create({
    description: {
      color:'#000000',
      fontSize: 35,
      fontStyle: 'italic',
      margin: 10,
  }
  })
  export const button = StyleSheet.create({
    button:{
      width: 50,
      height: 50,
       
    }
  })
  
  export const input = StyleSheet.create({
    input:{
      width: 200,
      borderWidth:1,
      borderColor: 'purple',
      borderRadius:5,
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10
    }
  })
  
  export const campoCadastro = StyleSheet.create({
    global:{
      margin:50,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    resultado:{
      backgroundColor: '#f22f',
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    }
  })