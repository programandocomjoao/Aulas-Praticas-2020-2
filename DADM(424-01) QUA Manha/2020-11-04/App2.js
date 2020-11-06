import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{flex: 2, backgroundColor: 'red'}} />
      <View style={{flex: 7, backgroundColor: 'yellow'}}/>
      <View style={{flex: 1, backgroundColor: 'orange'}}/>
    </View>
  );
}

export default DimensoesApp;