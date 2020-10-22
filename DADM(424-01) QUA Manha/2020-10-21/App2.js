import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const MeuApp = () => {
  return (
    <ScrollView>
      <Text style={{ fontWeight: 'bold', fontSize: '20pt', textAlign: 'center' }}>Sistema Solar</Text>

      <View>
        <Text style={{ fontWeight: 'bold', fontSize: '15pt', textAlign: 'center' }}>Planeta Terra</Text>

        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Blue_Marble_Eastern_Hemisphere.jpg'}} style={{ width: 200, height: 200, marginTop: '10px' }} />
      </View>

      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, color: '#003399', fontFamily: 'verdana', fontSize: '12pt', marginTop: '10px' }} />
    </ScrollView>
  );
}

export default MeuApp;