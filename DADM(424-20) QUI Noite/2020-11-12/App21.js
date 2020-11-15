import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const estilos = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: '#DDDDDD'
    },
    titulo: {
      fontSize: 32,
      fontWeight: 'bold',
      paddingTop: 25
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    tituloSecao: {
      backgroundColor: 'gray',
      color: 'white',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 20,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 10,
      paddingRight: 10
    }
  }
);

const BandasApp = () => {
  return(
    <View style={estilos.container}>
      <SectionList 
        sections={[
          {title: 'Rock Internacional', data: ['Oasis', 'The Cure', 'Guns And Roses', 'The Smiths', 'The Beatles']},
          {title: 'Rock Nacional', data: ['Legião Urbana', 'Nenhum de Nós', 'Los Hermanos', 'Paralamas do Sucesso', 'Ultraje a Rigor', 'Engenheiros do Hawaii', 'Bisnetos da Dona Neves']},
          {title: 'Samba e Pagode', data: ['Raça Negra', 'Grupo Raça', 'Grupo Pirraça', 'Fundo de Quintal']},
          {title: 'Outros Ritmos', data: ['Fala Mansa', 'Bonde do Tigrão', 'Menudos', 'Rouge']}
          ]}

          renderSectionHeader={
            ({section}) => <Text style={estilos.tituloSecao}>{section.title}</Text>
          }

          renderItem={
            ({item}) => <Text style={estilos.item}>{item}</Text>
          }        
      />
    </View>
  );
}

const MeuApp = () => {
  return(
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{backgroundColor: 'black', flex: 2, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 36, fontWeight: 'bold', textAlign: 'center'}}>Lista de Bandas</Text>
      </View>

      <View style={{flex: 7}}>
        <BandasApp />
      </View>

      <View style={{backgroundColor: 'black', flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', textAlign: 'center'}}>Desenvolvido por João P. B. Voigtlaender</Text>
      </View>
    </View>
  );
}

export default MeuApp;