import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CardCountry from "./components/cardCountry";

export default function CountriesModule() {

    // Constante para obtener la url base de la API
    const urlApi = process.env.EXPO_PUBLIC_URL_API;

    // Constante global para guardar los registros de la api
    const [dataList, setDataList] = useState([])


    // Constante para abrir o cerrar el modal
    const [isVisible, setIsVisible] = useState(false)

    // Constantes para guardar los datos del formulario
    const [Name, setName] = useState("")
    const [Code, setCode] = useState("")
    const [Flag, setFlag] = useState("")
    const [Image, setImage] = useState("")

    // Función para listar los datos
    const FunctionsDataList = async () => {
        try {
            const response = await axios.get(urlApi + "/countries")
            console.log(response)
            setDataList(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }


    // Renderización de funciones automaticas
    useEffect(() => {
        FunctionsDataList()
    }, [])


    // Funcion para eliminar
    const FunctionDelete = async (id) => {
        try {
            const response = await axios.delete(urlApi + "/countries/" + id)
            console.log(response)
            if (response.data.success) {
                FunctionsDataList()
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Funcion para guardar los datos del pais
    const saveDataCuntry = async () => {
        try {
            const response = await axios.post(urlApi + "/countries", { name:Name, code:Code, flag:Flag, image:Image })
            console.log(response)
            if (response.data.success) {
                FunctionsDataList()
            }

            setIsVisible(false)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <View style={{flex:1}}>
            <Pressable
                onPress={() => setIsVisible(!isVisible)}
                style={styles.btnOpenModal}>
                <Text style={styles.textBtnOpenModal}>Nuevo</Text>
            </Pressable>
            <ScrollView>
                <View style={styles.cardCliet}>

                    <FlatList
                        data={dataList}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <CardCountry
                                id={item._id}
                                flag={item.flag}
                                name={item.name}
                                image={item.image}
                                FunctionDelete={FunctionDelete}
                            />
                        )}
                    >

                    </FlatList>
                </View>
            </ScrollView>

            {/* Modal */}
            <Modal
                visible={isVisible}
                animationType="slide"
            >
                <View style={styles.headerModal}>
                    <Text style={styles.TextheaderModal}>Nuevo Pais</Text>
                    <Pressable
                        onPress={() => setIsVisible(!isVisible)}
                        style={styles.btnCloseModal}>
                        <Text style={styles.TextheaderModal}>X</Text>
                    </Pressable>
                </View>
                <View style={styles.bodyModal}>

                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                        style={styles.textInputs}
                        value={Name}
                        onChangeText={setName}
                        placeholder="Nombre del Pais"
                    />
                    <Text style={styles.label}>Codigo</Text>
                    <TextInput
                        style={styles.textInputs}
                        value={Code}
                        onChangeText={setCode}
                        placeholder="Codigo del Pais"
                    />
                    <Text style={styles.label}>Bandera</Text>
                    <TextInput
                        style={styles.textInputs}
                        value={Flag}
                        onChangeText={setFlag}
                        placeholder="Bandera del Pais"
                    />
                    <Text style={styles.label}>Imagen</Text>
                    <TextInput
                        style={styles.textInputs}
                        value={Image}
                        onChangeText={setImage}
                        placeholder="Url de la imagen del Pais"
                    />

                    <Pressable
                        onPress={saveDataCuntry}
                        style={styles.btnSaveData}>
                        <Text style={styles.TextSaveModal}>GUARDAR DATOS</Text>
                    </Pressable>

                </View>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    // Estilos de las card
    cardCliet: {
        padding: '15px',
    },
    textCardClints: {
        fontSize: '19px',
    },

    TextInter: {
        fontWeight: 'bold'
    },


    // Estilos del boton
    btnOpenModal: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 10,
        right: 20,
        zIndex: 2,
        paddingHorizontal: 15,
        borderRadius: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBtnOpenModal: {
        fontSize: 18
    },

    bodyModal: {
        padding: 20
    },

    headerModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 15,
        backgroundColor: 'blue',
        alignItems: 'center'
    },

    TextheaderModal: {
        fontSize: 22,
        color: 'white'
    },
    // Estilos del boton
    btnCloseModal: {
    },

    textBtnCloseModal: {
        fontSize: 18
    },

    label: {
        fontSize: 20
    },
    textInputs: {
        border: '1px solid black',
        height: 45,
        borderRadius: 8,
        paddingLeft: 15
    },
    btnSaveData: {
        marginTop: 25,
        backgroundColor: 'blue',
        justifyContent: 'center',
        height: 45,
        alignItems: 'center',
    }

})