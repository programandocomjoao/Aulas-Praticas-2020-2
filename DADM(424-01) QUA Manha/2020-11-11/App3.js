import React from 'react';
import { View, Button } from 'react-native';

const AlertaApp = () => {
  return(
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap',
      alignContent: 'stretch'
    }}>
      <Button 
        title="Me Pressione"
        onPress={() => {
            alert('Obrigado por me pressionar!!!');
          }
        }
      />
    </View>
  );
}

export default AlertaApp;