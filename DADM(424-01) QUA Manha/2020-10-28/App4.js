import React from 'react'
import { Text, SectionList, View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create (
  {
    container: {
      flex: 1,
      paddingTop: 25,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      paddingTop: 25
    },
    tituloSecao: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      color: 'white',
      backgroundColor: 'gray'
    }
  }
);

const BandasApp = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Listas de Bandas</Text>

      <SectionList 
        sections={[
          {title: 'Rock Internacional', data: ['Oasis', 'The Cure', 'The Smiths', 'The Beatles', 'Guns And Roses']},
          {title: 'Rock Nacional', data: ['Legião Urbana', 'Engenheiros do Hawaii', 'Nenhum de Nós', 'Ultraje a Rigor', 'Los Hermanos', 'Paralamas do Sucesso', 'Netos da Dona Neves']},
          {title: 'Samba e Pagode', data: ['Raça Negra', 'Grupo Raça', 'Grupo Pirraça', 'Fundo de Quintal']},
          {title: 'Outros Ritmos', data: ['Falamansa', 'Bonde do Tigrão']}
        ]}

        renderItem={
          ({item}) => <Text style={estilos.item}>{item}</Text>
        }

        renderSectionHeader={
          ({section}) => <Text style={estilos.tituloSecao}>{section.title}</Text>
        }
      />
    </View>
  );
}

export default BandasApp;