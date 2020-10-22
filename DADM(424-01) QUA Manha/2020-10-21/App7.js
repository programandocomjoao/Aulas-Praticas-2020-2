import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Cachorro = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
    <Text>Meu nome é { props.nome } e eu estou { isHungry? "com fome" : "cheio" }</Text>
    <Button 
      onPress = {() => { 
        setIsHungry(false); 
      }} 
      disabled = {!isHungry}
      title = { isHungry? "Alimente o cão" : "Obrigado por alimentar" }
    />
    </View>
  );
}

const MeusDogs = () => {
  return (
    <View>
      <Cachorro posicao="1" nome="Coração" />
      <Cachorro posicao="2" nome="Suzuki" />
      <Cachorro posicao="3" nome="Pachola" />
      <Cachorro posicao="4" nome="Bingo" />
      <Cachorro posicao="5" nome="Betinha" />
      <Cachorro posicao="6" nome="Mel" />
    </View>
  ); 
}

export default MeusDogs;