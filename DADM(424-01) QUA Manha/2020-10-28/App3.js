import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'

const estilos = StyleSheet.create (
  {
    container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: 'silver'
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
    }
  }
);

const BandasApp = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Listas de Bandas</Text>

      <FlatList 
        data={[
          {banda: 'Oasis'},
          {banda: 'The Cure'},
          {banda: 'Guns And Roses'},
          {banda: 'The Smiths'},
          {banda: 'The Beatles'},
          {banda: 'Legião Urbana'},
          {banda: 'Nenhum de Nós'},
          {banda: 'Raça Negra'},
          {banda: 'Fala Mansa'},
          {banda: 'Los Hermanos'},
          {banda: 'Grupo Raça'},
          {banda: 'Grupo Pirraça'},
          {banda: 'Fundo de Quintal'},
          {banda: 'Paralamas do Suceso'},
          {banda: 'Ultraje a Rigor'},
          {banda: 'Engenheiros do Hawaii'},
          {banda: 'Netos de Dona Neves'}
        ]}

        renderItem={
          ({item}) => <Text style={estilos.item}>{item.banda}</Text>
        }
      />
    </View>
  );
}

export default BandasApp;