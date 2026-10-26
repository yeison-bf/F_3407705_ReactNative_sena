import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import CardListClients from './components/listCardClients';

export default function App() {


  // constante para la visibilidad del modal
  const [visibleModal, setVisibleModal] = useState(false)

  // Constantes para almacenar los datos
  const [nameCeClients, setNameClients] = useState("")
  const [ageCeClients, setAgeClients] = useState("")
  const [locationCeClients, setLocationClients] = useState("")


  // Funcion para guardar :
  const saveDataClients = () => {
    setListClients([
      ...listClients
      ,
      {
        id: 1,
        nombre: nameCeClients,
        edad: ageCeClients,
        direccion: locationCeClients
      }
    ])
    // setVisibleModal(false)
  }
  // Listado de clientes
  const [listClients, setListClients] = useState([
    
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
            <CardListClients nombre={item.nombre} edad={item.edad} direccion={item.direccion} />
          )}
        >
        </FlatList>
      </View>

      <Pressable
        onPress={(() => setVisibleModal(!visibleModal))}
        style={styles.newRegister}>
        <Text style={styles.TextnewRegister}>+</Text>
      </Pressable>



      {/* Componente del Modal */}
      <Modal
        visible={visibleModal}
        animationType='slide'
      >
        <View style={{ flex: 1 }}>
          <View style={styles.headerModal}>
            <Text style={styles.textTitleModal}>Nuevo cliente</Text>
            <Pressable
              onPress={(() => setVisibleModal(!visibleModal))}>
              <Text style={styles.textTitleModal}>X</Text>
            </Pressable>
          </View>
          <View style={styles.bodyFormClients}>
            <View style={styles.formControl}>
              <Text>Nombre completo</Text>
              <TextInput style={styles.inputText}
                placeholder='Documento'
                onChangeText={setNameClients}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Edad</Text>
              <TextInput style={styles.inputText}
                placeholder='Documento'
                onChangeText={setAgeClients}
              />
            </View>
            <View style={styles.formControl}>
              <Text>Dirección</Text>
              <TextInput style={styles.inputText}
                placeholder='Documento'
                onChangeText={setLocationClients}
              />
            </View>
            <Pressable
              onPress={saveDataClients}
              style={styles.btnSaveData}>
              <Text>GUARDAR DATOS</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
  TextnewRegister: {
    color: 'white',
    fontSize: '4em',
    bottom: '10px'
  },

  // Estilos del modal
  headerModal: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '60px',
    backgroundColor: '#050047',
    alignItems: 'center'
  },
  textTitleModal: {
    color: 'white',
    fontSize: '1.5em'
  },
  bodyFormClients: {
    padding: '1.5em',
    flex: 1
  },

  formControl: {
    marginTop: '1.5em'
  },

  inputText: {
    border: '1px solid',
    height: 40,
    borderRadius: 8,
    paddingLeft: 8
  },
  btnSaveData: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: 'blue',
    width: '85%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',

  }




});
