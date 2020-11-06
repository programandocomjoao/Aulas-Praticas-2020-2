import React from 'react';
import { View, StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

const DimensoesApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{width: 75, height: 75, backgroundColor: 'red'}} />
      <View style={{width: 75, height: 75, backgroundColor: 'yellow'}}/>
      <View style={{width: 75, height: 75, backgroundColor: 'orange'}}/>
    </View>
  );
}

export default DimensoesApp;