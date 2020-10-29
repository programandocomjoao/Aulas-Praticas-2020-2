import React from 'react'
import { View } from 'react-native'

const FixoApp = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'silver', flex: 3}}></View>
      <View style={{backgroundColor: 'gray', flex: 5}}></View>
      <View style={{backgroundColor: 'black', flex: 2}}></View>
    </View>
  );
}

export default FixoApp;