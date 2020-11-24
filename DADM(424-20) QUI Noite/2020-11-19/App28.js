import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{backgroundColor: 'red', width: 50, height: 50, alignSelf: 'center'}} />
      <View style={{backgroundColor: 'orange', width: 100, height: 75}} />
      <View style={{backgroundColor: 'yellow', width: 150, height: 100, alignSelf: 'flex-end'}} />
    </View>
  );
}

export default DimensoesApp;