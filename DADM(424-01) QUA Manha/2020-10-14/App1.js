import React from 'react';
import { Text, View } from 'react-native';

const MensagemApp = () => {
  return(
    <View 
      style={
        {flex: 1, justifyContent: "center", alignItems: "center"}
      }>
      <Text>Alô Mundo da Programação!!!</Text>
    </View>
  )
}

export default MensagemApp;