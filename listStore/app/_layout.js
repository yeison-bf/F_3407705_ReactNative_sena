import { Slot, Stack } from "expo-router";
import { Text } from "react-native";
import { View } from "react-native";

export default function Layout(){
    return (
        // <View style={{flex:1}}>
        //     <Slot/>
        // </View>
        <Stack>
            <Stack.Screen name="(tabs)"
            options={{ headerShown: false}} />
        </Stack>
    )
}