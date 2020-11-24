import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //flexDirection: 'column-reverse',
    //flexDirection: 'row',
    flexDirection: 'row-reverse',
  }
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{backgroundColor: 'red', flex: 2}} />
      <View style={{backgroundColor: 'orange', flex: 7}} />
      <View style={{backgroundColor: 'yellow', flex: 1}} />
    </View>
  );
}

export default DimensoesApp;