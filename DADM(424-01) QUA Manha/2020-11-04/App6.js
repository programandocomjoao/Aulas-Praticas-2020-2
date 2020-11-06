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
      <View style={{height: 75, backgroundColor: 'red'}} />
      <View style={{height: 75, backgroundColor: 'yellow'}}/>
      <View style={{height: 75, backgroundColor: 'orange'}}/>
    </View>
  );
}

export default DimensoesApp;