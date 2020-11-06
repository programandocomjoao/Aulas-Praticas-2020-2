import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 50, height: 75, backgroundColor: 'red'}} />
      <View style={{width: 100, height: 125, backgroundColor: 'yellow'}}/>
      <View style={{width: 150, height: 175, backgroundColor: 'orange'}}/>
    </View>
  );
}

export default DimensoesApp;