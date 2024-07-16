import { NavigationContainer } from "@react-navigation/native";
import RoutesTabs from "./routes";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/home";

const Stack = createStackNavigator()

export default function MultiTabRoutes() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Registrar" component={RoutesTabs} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}