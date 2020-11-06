import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'orange'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'green'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'pink'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'violet'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'purple'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'brown'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'black'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'gray'}}/>
      <View style={{width: 100, height: 100, backgroundColor: 'silver'}}/>
    </View>
  );
}

export default DimensoesApp;