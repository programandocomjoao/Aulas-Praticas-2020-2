import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 50, height: 50, backgroundColor: 'red', alignSelf: 'center'}} />
      <View style={{width: 100, height: 75, backgroundColor: 'yellow'}}/>
      <View style={{width: 150, height: 100, backgroundColor: 'orange', alignSelf: 'flex-end'}}/>
    </View>
  );
}

export default DimensoesApp;