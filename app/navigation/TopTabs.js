import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import PostsScreen from '../screens/PostsScreen';
import IdScreen from '../screens/IdScreen';
import LogOutScreen from '../screens/LogOutScreen';

const Tab = createMaterialTopTabNavigator();

export const HomeTopTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarAndroidRipple: { borderless: false },
            tabBarActiveTintColor: 'black',
            tabBarPressColor: 'white',
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}>
            <Tab.Screen name="Post" component={PostsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export const SettingsTopTabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarAndroidRipple: { borderless: false },
            tabBarActiveTintColor: 'black',
            tabBarPressColor: 'white',
            tabBarIndicatorStyle: { backgroundColor: 'black' }
        }}>
            <Tab.Screen name="Id" component={IdScreen} />
            <Tab.Screen name="LogOut" component={LogOutScreen} />
        </Tab.Navigator>
    );
};