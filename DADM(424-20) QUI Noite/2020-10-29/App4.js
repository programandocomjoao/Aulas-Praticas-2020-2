import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center' 
  }
})

const TerraApp = () => {
  return(
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Sistema Solar</Text>

      <View>
        <Text style={estilos.subtitulo}>Planeta Terra</Text>

        <Image 
          source={
            {uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/TerraformedMarsGlobeRealistic.jpg'}
          }
          style={
            {width: 200, height: 200, marginTop: 20}
          }
        />
      </View>

      <TextInput 
        style={
          {borderWidth: 1, height: 40, marginTop: 20}
        }
        placeholder="Digite o nome de um planeta"
      />
    </ScrollView>
  )
}

export default TerraApp;