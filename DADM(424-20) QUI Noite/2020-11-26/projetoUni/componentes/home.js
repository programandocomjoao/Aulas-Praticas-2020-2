import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const HomeApp = ({ navigation }) => {
    return(
      <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Image
            style={{width: 300, height: 49, marginTop: 30}}
            source={require('../imagens/logoUnigranrio.png')}
          />

          <Text style={{padding: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis tristique dui in gravida. Integer id lorem nec odio iaculis eleifend. Suspendisse potenti. Mauris et lectus condimentum, euismod mi sit amet, mattis purus. Praesent lacinia dapibus vestibulum. Cras accumsan semper magna vel semper. In interdum tortor porta metus ornare vehicula. Aenean tellus nulla, scelerisque at mollis in, volutpat vel urna. Aliquam tincidunt erat nisl, eget accumsan quam tempus non.</Text>

          <Button 
            title="Mídias Sociais"
            onPress={() => navigation.navigate('Mídias Sociais')}
          />
      </View>
    )
  }
  
  export default HomeApp;