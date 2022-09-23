import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeStackNavigator from './home-navigation/HomeStackNavigation';
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
      <Tab.Navigator headerMode='none' screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={HomeStackNavigator} />
        <Tab.Screen name='Explore' component={HomeScreen} />
        <Tab.Screen name='Social' component={HomeScreen} />
        <Tab.Screen name='Profile' component={HomeScreen} />
      </Tab.Navigator>
  );
}