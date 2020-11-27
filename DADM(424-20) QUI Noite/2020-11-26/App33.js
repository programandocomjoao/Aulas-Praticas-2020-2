import React from 'react';
import { View, Button } from 'react-native';

const AlertaApp = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button 
        title="Me Pressione"
        onPress={() => {
            alert('Obrigado por me pressionar!');
          }
        }
      />
    </View>
  );
}

export default AlertaApp;