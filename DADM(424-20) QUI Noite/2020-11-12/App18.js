import React from 'react';
import { View } from 'react-native';

const FlexivelApp = () => {
  return(
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'red', flex: 2}} />
      <View style={{backgroundColor: 'orange', flex: 7}} />
      <View style={{backgroundColor: 'yellow', flex: 1}} />
    </View>
  );
}

export default FlexivelApp;