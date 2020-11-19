import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function TelaInicial() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Seja bem-vindo(a) ao meu App!!!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={TelaInicial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;