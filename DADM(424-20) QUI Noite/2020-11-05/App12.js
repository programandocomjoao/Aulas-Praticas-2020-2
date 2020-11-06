import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const CriptoApp = () => {
  const [texto, setTexto] = useState('');

  return(
    <View>
      <TextInput 
        style={{ borderWidth: 1, height: 40, marginTop: 30 }}
        placeholder="Digite o seu texto aqui"
        onChangeText={t => setTexto(t)}
      />

      <Text style={{ padding: 10, fontSize: 32 }}>
        {texto.split(' ').map((palavra) => palavra && '***')}
      </Text>
    </View>
  );
}

export default CriptoApp;