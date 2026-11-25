import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CardCountry from "./components/cardCountry";

export default function CountriesModule() {

    // Constante para obtener la url base de la API
    const urlApi = process.env.EXPO_PUBLIC_URL_API;

    // Constante global para guardar los registros de la api
    const [dataList, setDataList] = useState([])


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
        console.log(id)
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
    return (
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
                            FunctionDelete={FunctionDelete}
                        />
                    )}
                >

                </FlatList>
            </View>
        </ScrollView>
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

})