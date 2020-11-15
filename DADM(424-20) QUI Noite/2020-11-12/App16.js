import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    vermelho: {
      color: 'red'
    },
    azulGrande: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30
    }
  }
);

const EstilosApp = () => {
  return(
    <View style={estilos.container}>
      <Text style={estilos.vermelho}>Eu sou vermelho!</Text>
      <Text style={estilos.azulGrande}>Eu sou azul e grande!</Text>
      <Text style={[estilos.azulGrande, estilos.vermelho]}>Eu sou azul e grande, mas estou vermelho!</Text>
      <Text style={[estilos.vermelho, estilos.azulGrande]}>Eu sou vermelho, mas estou azul e grande!</Text>
    </View>
  );
}

export default EstilosApp;