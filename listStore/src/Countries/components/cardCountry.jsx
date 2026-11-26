import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function CardCountry({ id, flag, name, image, FunctionDelete }) {

    const deleteId = (id) => {
        FunctionDelete(id)
    }


    return (
        <ScrollView>

            <View style={styles.card}>
                <Image
                    style={styles.imgFlag}

                    source={{ uri: image }}
                />
                <View>

                    <Text>Pais:</Text>
                    <Text>{name}</Text>
                    <Text>Bandera:</Text>
                    <Text>{flag}</Text>
                    <Pressable
                        onPress={() => deleteId(id)}
                    >
                        <Text style={styles.btnDelete}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 2,
        borderRadius: 9,
        backgroundColor: '#EBE6E6',
        marginTop: 6,
        padding: 12,
        flexDirection: 'row',
        gap:25
    },

    btnDelete: {
        color: 'red'
    },
    imgFlag: {
        height: 80,
        width: 80,
        borderRadius: 50
    }
})