import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    alignContent: 'space-around',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'orange'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'pink'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'violet'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'purple'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'brown'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'black'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'gray'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'silver'}}/>
    </View>
  );
}

export default DimensoesApp;