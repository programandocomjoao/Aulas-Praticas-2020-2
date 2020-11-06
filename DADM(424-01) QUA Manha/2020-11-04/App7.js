import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 50,  backgroundColor: 'red'}} />
      <View style={{width: 100,  backgroundColor: 'yellow'}}/>
      <View style={{width: 150,  backgroundColor: 'orange'}}/>
    </View>
  );
}

export default DimensoesApp;