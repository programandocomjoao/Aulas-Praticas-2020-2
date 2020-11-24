import React from 'react';
import { Text, View, Image, Button } from 'react-native';

const ClubesApp = ({ navigation }) => {
  return(
    <View 
      style={
        {flex: 1, justifyContent: "center", alignItems: "center"}
      }>
      <Text>Curitiba Comedy Club</Text>
      <Text>Clube do Minhoca</Text>
      <Text>Rio Retrô Comedy Club</Text>
      <Text>Acústico Business</Text>

      <Image
        style={{width: 300, height: 300, marginTop: 30, marginBottom: 30}}
        source={require('./imagens/curitiba.jpg')}
      />
      
      <View>
        <Button 
            title="Voltar"
            onPress={() => navigation.goBack()}
        />
      
        <Button
            title="Conheça os Comediantes"
            onPress={() => navigation.navigate('Comediantes')}
        />
      
        <Button
            title="Início"
            onPress={() => navigation.popToTop()}
        />
        </View>
    </View>
  )
}

export default ClubesApp;