import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: 'blue',
        paddingTop: 50,
        textAlign: 'center',
    },
    letter:{
        color: 'pink',
        fontSize: 22,
        textAlign: 'center',
    },
    titleSession:{
        color: '#fff',
        fontSize: 18
    }
})

export const imageCard= StyleSheet.create({
    image:{
        width: 120,
        height: 180,
        borderColor: 'black',
        borderWidth: 3,
    }
    
})