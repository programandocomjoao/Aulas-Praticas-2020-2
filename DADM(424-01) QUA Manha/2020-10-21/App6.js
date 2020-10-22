import React from 'react';
import { Text } from 'react-native';

const retornarNome = (primeiroNome, nomeMeio, ultimoNome) => {
  return primeiroNome + " " + nomeMeio + " " + ultimoNome;
}

const Cachorro = () => {
  return (
    <Text>Olá, eu sou o seu cachorro! E o meu nome é {retornarNome("Mel", "da Costa", "Baptista")}!</Text>
  );
}

export default Cachorro;