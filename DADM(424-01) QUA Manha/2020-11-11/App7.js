import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TelaInicial() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sejam Bem Vindos!!!</Text>
    </View>
  );
}

function TelaSobre() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre Meu App 1.0!!!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Sobre" component={TelaSobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;