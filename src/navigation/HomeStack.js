import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeStackNavigator from './home-navigation/HomeStackNavigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
    return (
        <Tab.Navigator headerMode='none' screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case "Home":
                        iconName = focused ? 'home' : 'home-outline';
                        break;
                    case "Explore":
                        iconName = focused ? 'chart-line' : 'chart-line';
                        break;
                    case "Social":
                        iconName = focused ? 'chat' : 'chat-outline';
                        break;
                    case "Profile":
                        iconName = focused ? 'account' : 'account-outline';
                        break;
                }


                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
        })}>
            <Tab.Screen name='Home' component={HomeStackNavigator} />
            <Tab.Screen name='Explore' component={HomeScreen} />
            <Tab.Screen name='Social' component={HomeScreen} />
            <Tab.Screen name='Profile' component={HomeScreen} />
        </Tab.Navigator >
    );
}