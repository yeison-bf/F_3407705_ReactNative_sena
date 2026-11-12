import { Slot } from "expo-router";
import { Text } from "react-native";
import { View } from "react-native";

export default function Layout(){
    return (
        <View>
            <Slot/>
        </View>
    )
}