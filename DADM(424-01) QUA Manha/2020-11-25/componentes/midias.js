import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

const MidiasApp = () => {
    return(
        <View style={{flex: 1, marginTop: 20}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    style={{width: 300, height: 49, marginTop: 30}}
                    source={require('../imagens/logoUnigranrio.png')}
                />
            </View>

            <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://portal.unigranrio.edu.br');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeSite.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        //Linking.openURL('https://www.google.com.br/maps');
                        Linking.openURL('https://maps.app.goo.gl/F55oFKTYJjA1aCib6');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeMaps.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        //Linking.openURL('mailto:');
                        Linking.openURL('mailto:atendimento@unigranrio.com.br');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeEmail.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://api.whatsapp.com/send?phone=552132194040');
                        //Linking.openURL('http://api.whatsapp.com/send?phone=552132194040&text=Prof. Joao eh o melhor');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeWhatsapp.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flex: 3, flexDirection: 'row', alignItems: 'stretch'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        //Linking.openURL('http://instagram.com');
                        Linking.openURL('http://instagram.com/unigranrio');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeInstagram.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => {
                        //Linking.openURL('http://facebook.com/unigranrio');
                        //Linking.openURL('fb://');
                        Linking.openURL('fb://page/111800282236339');
                    }}>
                        <Image 
                            style={{width: 75, height: 75}}
                            source={require('../imagens/iconeFacebook.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default MidiasApp;