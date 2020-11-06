import React from 'react';
import { Text } from 'react-native';

const retornarNome = (primeiroNome, nomeMeio, ultimoNome) => {
  return primeiroNome + " " + nomeMeio + " " + ultimoNome
}

const CachorroApp = () => {
  return(
    <Text>Olá, eu sou um cachorro e o meu nome é {retornarNome("Mel", "da Costa", "Voigtlaender")}!!!</Text>
  )
}

export default CachorroApp;