import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

const Saudacao = (props) => {
  return(
    <View style={estilos.container}>
      <Text>Olá {props.nome} {props.sobrenome}!</Text>
    </View>
  )
}

const SaudacoesApp = () => {
  return(
    <View style={{top: 50}}>
      <Saudacao nome="Ariane" sobrenome="Silva" />
      <Saudacao nome="Danilo" sobrenome="Garcia" />
      <Saudacao nome="Alessandro" sobrenome="Souza" />
      <Saudacao nome="Victor" sobrenome="Oliveira" />
      <Saudacao nome="Raife" sobrenome="Jesus" />
    </View>
  )
}

export default SaudacoesApp;