import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,Image, TextInput } from 'react-native';
import {styles,textos,button,input,campoCadastro} from './styles/styles'
import { useState } from 'react';
export default function App() {
  const [name,setName]= useState('')
  const [idade,setIdade] = useState(0)
  const [profissao,setProfissao] = useState('')
  const [show,setShow] = useState(false)
  const Clicado = ()=>{
    setShow(true)
  }
  const ClicadoCancelar = ()=>{
    setShow(false)
  }
  return (
    <View style={styles.body}>
      <View style={styles.view1}>
        <Text style={textos.description}>Cadastro de Clientes</Text>
      </View>
      <View style={campoCadastro.global}>
        <Text style={textos.description}>
          Digite seu Nome
        </Text>
        <TextInput
          placeholder='ex.. Tomate'
          style={input.input}
          onChangeText={(value)=>setName(value)}
        />
        <Text style={textos.description} >
            Digite sua Idade
        </Text>
        <TextInput 
          placeholder='ex.. 22'
          style={input.input}
          onChangeText={(value)=>setIdade(value)}
        />
        <Text style={textos.description} >
          Sua profissão
        </Text>
        <TextInput 
          placeholder='ex.. Jogador de Volei'
          style={input.input}
          onChangeText={(value)=>setProfissao(value)}
        />
        <Button
          title='Cadastre-se'
          onPress={()=>Clicado()}
          style={button.button}
        />
      </View>
      <View>
        {
          show  ? 
          <View style={campoCadastro.resultado}>
            <Text style={textos.description} >Seu nome: {name} </Text>
            <Text style={textos.description} >Sua idade {idade}</Text>
            <Text style={textos.description} >Sua profissão {profissao}</Text>
            
            <Button
              title='Cancel'
              onPress={()=>ClicadoCancelar()}
              style={button.button}
            />
          </View> : <View></View> 
        }
      </View>
    </View>
  );
}