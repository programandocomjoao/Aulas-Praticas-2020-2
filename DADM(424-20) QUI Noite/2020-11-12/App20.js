import React from 'react';
import { View } from 'react-native';

const FlexivelApp = () => {
  return(
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{backgroundColor: 'red', flex: 2}} />
      <View style={{flex: 4, flexDirection: 'row'}}>
        <View style={{backgroundColor: 'blue', flex: 1}} />
        <View style={{backgroundColor: 'green', flex: 1}} />
      </View>
      <View style={{backgroundColor: 'yellow', flex: 2}} />
    </View>
  );
}

export default FlexivelApp;