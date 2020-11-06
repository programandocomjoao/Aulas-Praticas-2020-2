import React from 'react';
import { View, StyleSheet, Text, SectionList } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  rodape: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
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
  },
});

const BandasApp = () => {
  return(
    <View style={estilos.container}>
      <View style={{flex: 2, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={estilos.titulo}>Lista de Bandas</Text>
      </View>

      <View style={{flex: 7, backgroundColor: 'white'}}>
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

      <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
        <Text style={estilos.rodape}>2020 &copy; Todos os direitos reservados para João P. B. Voigtlaender</Text>
      </View>
    </View>
  );
}

export default BandasApp;