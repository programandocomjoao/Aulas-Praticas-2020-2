import React from 'react';
import { View } from 'react-native';

const FlexivelApp = () => {
  return(
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', flex: 2}} />
      <View style={{backgroundColor: 'orange', flex: 4}} />
      <View style={{backgroundColor: 'yellow', flex: 3}} />
    </View>
  );
}

export default FlexivelApp;