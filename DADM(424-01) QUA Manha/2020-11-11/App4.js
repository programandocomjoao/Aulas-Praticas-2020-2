import React, { Component } from 'react';
import { View, Button } from 'react-native';

class AlertaApp extends Component {
  pressionarBotao() {
    alert('Uhu!!! Fui apertado!!!')
  }

  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        alignContent: 'stretch'
      }}>
        <Button 
          title="Aperte-me"
          onPress={this.pressionarBotao}
        />

        <Button 
          title="Aperte-me também"
          color="#841584"
          onPress={this.pressionarBotao}
        />

        <Button 
          title="Também quero ser apertado"
          onPress={this.pressionarBotao}
        />
      </View>
    );
  }
}

export default AlertaApp;