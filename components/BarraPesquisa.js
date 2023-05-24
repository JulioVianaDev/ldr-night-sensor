import React from 'react'
import { styles } from '../styles/styles'
import { View,TextInput,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
export const  BarraPesquisa=()=> {
  return (
    <>
        <View style={styles.viewSearch}>
            <TextInput
                style={styles.input}
                placeholder="Procurando algo?"
            />
            <TouchableOpacity style={styles.icon}>
            <Icon name="search" color="#000" size={25} />
            </TouchableOpacity>
        </View>
    </>
  )
}
