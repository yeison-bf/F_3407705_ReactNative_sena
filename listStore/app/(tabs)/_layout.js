import { Tabs } from "expo-router";
import { IconCategory, IconCountries, IconHome } from "../../components/utils/icons";



export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Inicio",
                    tabBarIcon: () => (
                        <IconHome/>
                    )
                }}
            />
            <Tabs.Screen
                name="category"
                options={{
                    title: "Categorias",
                    tabBarIcon: () => (
                       <IconCategory/> 
                    )
                }}
            />
            <Tabs.Screen
                name="countries"
                options={{
                    title: "Paises",
                    tabBarIcon: () => (
                        <IconCountries/>
                    )
                }}
            />
        </Tabs>
    )
}
