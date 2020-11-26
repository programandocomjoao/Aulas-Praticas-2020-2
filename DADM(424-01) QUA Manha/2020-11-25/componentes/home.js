import React from 'react';
import { View, Image, Text, Button } from 'react-native';

const HomeApp = ({ navigation }) => {
    return(
        <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image 
                style={{width: 300, height: 49, marginTop: 30}}
                source={require('../imagens/logoUnigranrio.png')}
            />

            <Text style={{padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur fringilla purus eu condimentum. Suspendisse tincidunt egestas purus, id dictum orci commodo non. Integer et elit dapibus, pharetra nisl viverra, lacinia felis. Morbi varius scelerisque magna, non iaculis sapien pulvinar eget. Donec ex erat, laoreet eu urna ac, tincidunt consequat dui. Proin sodales lacinia felis at dapibus. Etiam eget augue eget nisl ornare vehicula eget in sapien.</Text>

            <Button 
                title="Mídias Sociais"
                onPress={() => navigation.navigate('Mídias Sociais')}
            />
        </View>
    );
}

export default HomeApp;