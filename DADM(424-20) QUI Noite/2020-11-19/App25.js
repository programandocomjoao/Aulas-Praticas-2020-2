import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'flex-start',
    //alignItems: 'flex-end',
    alignItems: 'center',
  }
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{backgroundColor: 'red', width: 75, height: 75}} />
      <View style={{backgroundColor: 'orange', width: 75, height: 75}} />
      <View style={{backgroundColor: 'yellow', width: 75, height: 75}} />
    </View>
  );
}

export default DimensoesApp;