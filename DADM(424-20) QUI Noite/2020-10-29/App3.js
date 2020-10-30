import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

class ContadorApp extends Component {
  state = {
    contador: 0
  }

  pressionar = () => {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render() {
    return(
      <View style={estilos.container}>
        <TouchableOpacity 
          style={estilos.botao} 
          onPress={this.pressionar}
        >
          <Text>Clique aqui</Text>
        </TouchableOpacity>

        <Text>Você clicou {this.state.contador} vezes!!!</Text>
      </View>
    )
  }
}

export default ContadorApp;