import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    flexDirection: 'row',
    justifyContent: 'flext-start',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    //alignContent: 'stretch'
    alignContent: 'flex-start'
    //alignContent: 'flex-end'
    //alignContent: 'center'
    //alignContent: 'space-between'
    //alignContent: 'space-around'
    //alignContent: 'space-evenly'
  }
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{backgroundColor: 'red', width: 50, height: 50}} />
      <View style={{backgroundColor: 'orange', width: 50, height: 50}} />
      <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
      <View style={{backgroundColor: 'green', width: 50, height: 50}} />
      <View style={{backgroundColor: 'pink', width: 50, height: 50}} />
      <View style={{backgroundColor: 'violet', width: 50, height: 50}} />
      <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
      <View style={{backgroundColor: 'brown', width: 50, height: 50}} />
      <View style={{backgroundColor: 'black', width: 50, height: 50}} />
      <View style={{backgroundColor: 'gray', width: 50, height: 50}} />
      <View style={{backgroundColor: 'silver', width: 50, height: 50}} />
    </View>
  );
}

export default DimensoesApp;