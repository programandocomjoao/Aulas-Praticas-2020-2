import React, { Component } from 'react';
import { View, Button } from 'react-native';

class AlertaApp extends Component {
  exibirAlerta() {
    alert('Uhu!!! Fui pressionado!!!');
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title="Me Pressione"
          onPress={this.exibirAlerta}
        />
      </View>
    );
  }
}

export default AlertaApp;