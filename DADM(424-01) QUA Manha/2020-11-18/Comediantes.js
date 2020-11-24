import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const ComediantesApp = ({ navigation }) => {
  return(
    <View 
      style={
        {flex: 1, justifyContent: "center", alignItems: "center"}
      }>
      <Text>Afonso Padilha</Text>
      <Text>Dih Lopes</Text>
      <Text>Marcio Donato</Text>
      <Text>Thiago Ventura</Text>

      <Image
        style={{width: 300, height: 200, marginTop: 30, marginBottom: 30}}
        source={require('./imagens/4amigos.jpg')}
      />

      <View>
        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
      
        <Button
            title="Conheça os Clubes de Comédia"
            onPress={() => navigation.navigate('Clubes de Comédia')}
        />
      
        <Button
            title="Início"
            onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  )
}

export default ComediantesApp;