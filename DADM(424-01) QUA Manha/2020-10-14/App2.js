import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create(
  {
    centralizado: {alignItems: "center"}
  }
)

const Saudacao = (props) => {
  return(
    <View style={estilos.centralizado}>
      <Text>Olá {props.nome} {props.sobrenome}!!!</Text>
    </View>
  )
}

const VariasSaudacoes = () => {
  return(
    //<View style={[estilos.centralizado, {top:50}]}></View>
    <View style={{top:50}}>
      <Saudacao nome="Beatriz" sobrenome="Amieiro" />
      <Saudacao nome="Gabriel" sobrenome="Francisco" />
      <Saudacao nome="Hosana" sobrenome="Barcelos" />
      <Saudacao nome="Matheus" sobrenome="Acácio" />
      <Saudacao nome="Juliane" sobrenome="Alves" />
    </View>
  )
}

export default VariasSaudacoes;