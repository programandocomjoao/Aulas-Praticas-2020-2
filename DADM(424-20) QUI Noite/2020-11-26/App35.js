import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback  } from 'react-native';

class AlertaApp extends Component {
  exibirAlerta() {
    alert('Uhu!!! Fui pressionado!!!');
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={this.exibirAlerta}>
          <View style={{ marginBottom: 30, width: 260, alignItems: 'center', backgroundColor: '#0080C0' }}>
            <Text style={{ color: 'white', padding: 20 }}>Me Aperte!!!</Text>
          </View>
        </TouchableOpacity>

        <TouchableHighlight onPress={this.exibirAlerta} underlayColor="white">
          <View style={{ marginBottom: 30, width: 260, alignItems: 'center', backgroundColor: '#0080C0' }}>
            <Text style={{ color: 'white', padding: 20 }}>Me Aperte Também!!!</Text>
          </View>
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={this.exibirAlerta}>
          <View style={{ marginBottom: 30, width: 260, alignItems: 'center', backgroundColor: '#0080C0' }}>
            <Text style={{ color: 'white', padding: 20 }}>Também quero um Aperto!!!</Text>
          </View>
        </TouchableWithoutFeedback> 
      </View>
    );
  }
}

export default AlertaApp;