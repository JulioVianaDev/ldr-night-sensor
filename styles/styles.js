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
        top: 40,
    }
});

export const styleTexto = StyleSheet.create({
    titulo:{
        fontSize: 36,
        color: 'white',
    },
    subTitutlo:{
        fontSize: 24,
        color: 'white'
    },
    texto:{
        fontSize:12,
        color: 'white'
    }
})

export const styleImages=StyleSheet.create({
    padrao:{
        width: 250,
        height:250
    }
})