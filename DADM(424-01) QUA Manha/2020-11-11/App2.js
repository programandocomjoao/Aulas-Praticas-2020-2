import React from 'react';
import { View } from 'react-native';

const PosicaoApp = () => {
  return(
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      alignContent: 'stretch'
    }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'red', top: 20, left: 50, position: 'absolute' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'orange', top: 50, left: 75, position: 'absolute' }} />
      <View style={{ width: 100, height: 100, backgroundColor: 'yellow', top: 80, left: 100, position: 'absolute' }} />
    </View>
  );
}

export default PosicaoApp;