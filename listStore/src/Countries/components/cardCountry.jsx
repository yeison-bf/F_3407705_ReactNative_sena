import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CardCountry({ id, flag, name, FunctionDelete }) {

    const deleteId = (id) => {
        FunctionDelete(id)
    }

    return (
        <View style={styles.card}>
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
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 2,
        borderRadius: 9,
        backgroundColor: '#EBE6E6',
        marginTop: 6,
        padding: 12
    },

    btnDelete: {
        color: 'red'
    }
})