import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './comediantes';
import './clubes';
import ClubesApp from './clubes';
import ComediantesApp from './comediantes';

function TelaInicial({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ paddingBottom: 30 }}>Seja bem-vindo(a) ao Stand Up Comedy App!!!</Text>
      <Text style={{ paddingBottom: 30 }}>O seu aplicativo de comédia Stand Up!!!</Text>

      <Button
        title="Conheça os Comediantes"
        onPress={() => navigation.navigate('Comediantes')}
      />

      <Button
        title="Conheça os Clubes de Comédia"
        onPress={() => navigation.navigate('Clubes de Comédia')}
      />
    </View>
  );
}

function TelaComediantes() {
  return(<ComediantesApp />);
}

function TelaClubes() {
  return(<ClubesApp />);
}

const Stack = createStackNavigator();

function MeuApp() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Stand Up Comedy App">
        <Stack.Screen name="Stand Up Comedy App" component={TelaInicial} />
        <Stack.Screen name="Comediantes" component={ComediantesApp} />
        <Stack.Screen name="Clubes de Comédia" component={ClubesApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MeuApp;