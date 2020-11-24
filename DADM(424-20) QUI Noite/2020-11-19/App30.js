import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    //flexWrap: 'nowrap'
    flexWrap: 'wrap'
  }
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{backgroundColor: 'red', width: 100, height: 100}} />
      <View style={{backgroundColor: 'orange', width: 100, height: 100}} />
      <View style={{backgroundColor: 'yellow', width: 100, height: 100}} />
      <View style={{backgroundColor: 'blue', width: 100, height: 100}} />
      <View style={{backgroundColor: 'green', width: 100, height: 100}} />
      <View style={{backgroundColor: 'pink', width: 100, height: 100}} />
      <View style={{backgroundColor: 'violet', width: 100, height: 100}} />
      <View style={{backgroundColor: 'purple', width: 100, height: 100}} />
      <View style={{backgroundColor: 'brown', width: 100, height: 100}} />
      <View style={{backgroundColor: 'black', width: 100, height: 100}} />
      <View style={{backgroundColor: 'gray', width: 100, height: 100}} />
      <View style={{backgroundColor: 'silver', width: 100, height: 100}} />
    </View>
  );
}

export default DimensoesApp;