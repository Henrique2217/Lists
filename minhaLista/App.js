import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [nome, setNome]= useState('');
  
    const minhaLista =[
    {id: 1, nome: 'Leo', cpf: '111.555.666-44'},
    {id: 2, nome: 'Ana', cpf: '111.555.666-44' },
    {id: 3, nome: 'Lucas ', cpf: '111.555.666-44'}
  ] 
  
  
  return (
    <View style={styles.container}>

      <Text>Meus contatos</Text>

      <TextInput
        placeholder='Informe seu nome'
        value={nome}
        onChangeText={setNome}
      />  
      
      <FlatList
        data={minhaLista}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => <Text>{item.nome}</Text>}       
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
