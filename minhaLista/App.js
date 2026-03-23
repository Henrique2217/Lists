import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [nome, setNome]= useState('');
    const [minhaLista, setMinhaLista] = useState([]);

    function adicionarContato(){

      const novoContato = {
        id: Math.random().toString(),
        nome: nome
      }

      setMinhaLista([novoContato, ...minhaLista ]);
      setNome('')
    }
  
  
  return (
    <View style={styles.container}>

      <Text>Meus contatos</Text>

      <TextInput
        placeholder='Informe seu nome'
        value={nome}
        onChangeText={setNome}
      />  

      <Button
        title='Adicionar'
        onPress={adicionarContato} />
      
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
