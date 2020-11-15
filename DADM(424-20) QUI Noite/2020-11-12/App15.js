import React from 'react';
import { Text, View, SectionList, StyleSheet } from 'react-native';

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
      <Text style={estilos.titulo}>Lista de Bandas</Text>

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

export default BandasApp;