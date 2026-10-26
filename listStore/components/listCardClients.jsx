import { StyleSheet, Text, View } from "react-native";

export default function CardListClients({ nombre, edad, direccion }) {
    return (
        <View style={styles.cardCliet}>
            <Text style={styles.textCardClints}>Nombre : <Text style={styles.TextInter}>{nombre}</Text></Text>
            <Text style={styles.textCardClints}>Edad:  <Text style={styles.TextInter}>{edad} años</Text></Text>
            <Text style={styles.textCardClints}>Dirección:  <Text style={styles.TextInter}>{direccion}</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

    // Estilos de las card
    cardCliet: {
        backgroundColor: '#FAFAFA',
        gap: 4,
        marginTop: '10px',
        borderRadius: '10px',
        padding: '15px',
        border: '1px solid #b5b5be'
    },
    textCardClints: {
        fontSize: '19px',
    },

    TextInter: {
        fontWeight: 'bold'
    },

})