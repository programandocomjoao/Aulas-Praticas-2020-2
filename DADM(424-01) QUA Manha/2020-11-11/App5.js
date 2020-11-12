import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const estilos = StyleSheet.create(
  {
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    botao: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#0080C0'
    },
    textoBotao: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
  }
);

class AlertaApp extends Component {
  pressionarBotao() {
    alert('Uhu!!! Fui apertado!!!')
  }

  render() {
    return(
      <View style={estilos.container}>
        <TouchableHighlight underlayColor="white" onPress={this.pressionarBotao}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>Me Aperte!</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.pressionarBotao}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>Me Aperte Também!</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback onPress={this.pressionarBotao}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>Também quero um Aperto!</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback onPress={this.pressionarBotao}>
          <View style={estilos.botao}>
            <Text style={estilos.textoBotao}>Também quero um Aperto!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default AlertaApp;