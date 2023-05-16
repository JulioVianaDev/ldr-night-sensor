import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#051326',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topo:{
        position: 'absolute',
        backgroundColor: '#45135e',
        top: 40,
        width: '100%',
        height: 70,
    },
    meio:{
        margin: 10
    }
});

export const styleTexto = StyleSheet.create({
    titulo:{
        fontSize: 36,
        color: 'white',
        marginTop: 10,
        textAlign: 'center'
    },
    subTitutlo:{
        fontSize: 24,
        color: 'white'
    },
    texto:{
        fontSize:18,
        color: 'white',
        textAlign:"center"
    }
})

export const styleImages=StyleSheet.create({
    padrao:{
        width: 250,
        height:250
    } ,
    secundaria:{
        width: 50,
        height:50
    }
})
