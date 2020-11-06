import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

const Cachorro = (props) => {
  const [comFome, setComFome] = useState(true);

  return(
    <View>
      <Text>Olá, eu também sou um cachorro, o meu nome é {props.nome} e eu nasci em {props.ano}!!!</Text>
      <Text>Eu estou { comFome? "com fome" : "cheio" }!!!</Text>

      <Button 
        onPress = { () => {
            setComFome(false);
          }
        }
        disabled = {!comFome}
        title={ comFome? "Me alimente!!!" : "Obrigado por me alimentar!!!"} 
      />
    </View>
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