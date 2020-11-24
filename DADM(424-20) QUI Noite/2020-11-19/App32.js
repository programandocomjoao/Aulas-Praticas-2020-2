import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComediantesApp from './Comediantes';
import ClubesApp from './Clubes';

const Stack = createStackNavigator();

function TelaInicial({navigation}) {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginBottom: 30}}>Seja bem-vindo(a) ao Stand Up Comedy App!!!</Text>
      <Text style={{marginBottom: 30}}>O seu aplicativo de comédia Stand Up!!!</Text>

      <View style={{alignItems: 'stretch'}}>
        <Button 
          title="Conheça os Comediantes"
          onPress={() => navigation.navigate('Comediantes')}
        />

        <Button 
          title="Conheça os Clubes de Comédia"
          onPress={() => navigation.navigate('Clubes de Comédia')}
        />
      </View>
    </View>
  );
}

function ComedyApp() {
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

export default ComedyApp;