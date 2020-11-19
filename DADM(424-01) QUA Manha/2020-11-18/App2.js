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

function TelaSobre() {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>MeuApp Versão 1.0</Text>
      <Text>Última atualização 18/11/2020</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sobre o App">
        <Stack.Screen name="Início" component={TelaInicial} />
        <Stack.Screen name="Sobre o App" component={TelaSobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;