import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home/index';
import Register from '../screens/register';
import { FontAwesome5 } from '@expo/vector-icons';
import Tasks from '../screens/tasks';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RoutesTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Registrar"
                component={Register}
                options={{
                    tabBarIcon: () => <FontAwesome5 name="calendar-check" size={18} color="black" />,
                    tabBarInactiveTintColor: "black",
                    tabBarActiveTintColor: "black",
                }}>
            </Tab.Screen>
            <Tab.Screen
                name="Listar Tarefa"
                component={Tasks}
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="format-list-bulleted-triangle" size={18} color="black" />,
                    tabBarInactiveTintColor: "black",
                    tabBarActiveTintColor: "black",
                }}>
            </Tab.Screen>
        </Tab.Navigator>
    )
}