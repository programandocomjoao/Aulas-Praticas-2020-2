import React from 'react';
import { Text, View } from 'react-native';

const Cachorro = (props) => {
  return(
    <Text>Olá, eu também sou um cachorro, o meu nome é {props.nome} e eu nasci em {props.ano}!!!</Text>
  )
}

const CaesApp = () => {
  return(
    <View>
      <Cachorro nome="Coração" ano="1983" />
      <Cachorro nome="Suzuki" ano="1986" />
      <Cachorro nome="Pachola" ano="1987" />
      <Cachorro nome="Bingo" ano="1988" />
      <Cachorro nome="Betinha" ano="1991" />
      <Cachorro nome="Mel" ano="2008" />
    </View>
  );
}

export default CaesApp;