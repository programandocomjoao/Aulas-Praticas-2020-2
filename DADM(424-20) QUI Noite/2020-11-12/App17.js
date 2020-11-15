import React from 'react';
import { View } from 'react-native';

const FixoApp = () => {
  return(
    <View>
      <View style={{backgroundColor: 'red', width: 100, height: 100}} />
      <View style={{backgroundColor: 'orange', width: 150, height: 150}} />
      <View style={{backgroundColor: 'yellow', width: 200, height: 200}} />
    </View>
  );
}

export default FixoApp;