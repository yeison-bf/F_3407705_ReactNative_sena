import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardListClients from './components/listCardClients';

export default function App() {

  const [listClients, setListClients] = useState([
    {
      "id": 1,
      "nombre": "Juana De Arco Cristoabl Colon",
      "edad": 25,
      "direccion": "Cra 45 cl 89 - 36 - Medellín"
    },
    {
      "id": 2,
      "nombre": "María Herrera Castro",
      "edad": 18,
      "direccion": "Cra 45 cl 89 - 36 - Medellín"
    },
    {
      "id": 3,
      "nombre": "Manuel Rios Mesa",
      "edad": 35,
      "direccion": "Cra 45 cl 89 - 36 - Medellín"
    }
  ])

  return (
    <View style={styles.container}>
      <View style={styles.titleListClients}>
        <Text style={styles.titleListClient}>LISTADO DE CLIENTES</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={listClients}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <Text>Pailas, no tienes datos</Text>
          )}
          renderItem={({ item }) => (
            <CardListClients nombre={item.nombre} edad={item.edad} direccion={item.direccion}/>
          )}
        >
        </FlatList>
      </View>
      <TouchableOpacity style={styles.newRegister}>
        <Text style={styles.TextnewRegister}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerList: {
    padding: '10px'
  },

  titleListClients: {
    height: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050047'
  },
  titleListClient: {
    color: 'white',
    fontSize: '1.3em',
    fontWeight: 'bold'
  },

  // Estilos de boton flotante
  newRegister: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    backgroundColor: 'blue',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextnewRegister:{
    color: 'white',
    fontSize: '4em',
    bottom:'10px'
  }
});
