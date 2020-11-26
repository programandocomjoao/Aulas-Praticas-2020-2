import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeApp from './componentes/home';
import MidiasApp from './componentes/midias';

const Stack = createStackNavigator();

function UnigranrioApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeApp} />
        <Stack.Screen name="Mídias Sociais" component={MidiasApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default UnigranrioApp;