import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

class MeuApp extends Component {
  state = {
    contador: 0
  }

  onPress = () => {
    this.setState(
      {
        contador: this.state.contador + 1
      }
    )
  }

  render() {
    return(
      <View style={estilos.container}>
        <TouchableOpacity onPress={this.onPress} style={estilos.botao}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <View>
          <Text>Você clicou { this.state.contador } vezes</Text>
        </View>
      </View>
    )
  }
}

export default MeuApp;