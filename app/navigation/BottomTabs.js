import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeTopTabs, SettingsTopTabs } from './TopTabs';

const Tab = createMaterialBottomTabNavigator();

export default function MyBottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{ backgroundColor: '#1b1b1d', height: 70 }}
        >
            <Tab.Screen
                name="Home"
                component={HomeTopTabs}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsTopTabs}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}