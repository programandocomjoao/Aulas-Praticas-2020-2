import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vermelho: {
    color: 'red',
    textAlign: 'center',
  },
  azulMaior: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const EstilosApp = () => {
  return(
    <View style={estilos.container}>
      <Text style={estilos.vermelho}>Eu sou vermelho</Text>
      <Text style={estilos.azulMaior}>Eu sou azul e maior</Text>
      <Text style={[estilos.azulMaior, estilos.vermelho]}>Eu sou azul e maior, porém eu estou vermelho</Text>
      <Text style={[estilos.vermelho, estilos.azulMaior]}>Eu sou vermelho, porém eu estou azul e maior</Text>
    </View>
  );
}

export default EstilosApp;