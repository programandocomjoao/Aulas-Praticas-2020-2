import React from 'react';
import { Text, View } from 'react-native';

const Cachorro = () => {
  return(
    <Text>Olá, eu também sou um cachorro!!!</Text>
  )
}

const CaesApp = () => {
  return(
    <View>
      <Cachorro />
      <Cachorro />
      <Cachorro />
      <Cachorro />
      <Cachorro />
      <Cachorro />
    </View>
  );
}

export default CaesApp;