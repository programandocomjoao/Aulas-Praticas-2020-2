import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const CriptografiaApp = () => {
  const [texto, setTexto] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput  
        style={{borderWidth: 1, height: 40, marginTop: 30}}
        placeholder="Digite aqui o seu texto!"
        onChangeText={texto => setTexto(texto)}
        defaultValue={texto}
      />

      <Text style={{padding: 10, fontSize: 32}}>
        {texto.split(' ').map((palavra) => palavra && '***')}
      </Text>
    </View>
  );
}

export default CriptografiaApp;