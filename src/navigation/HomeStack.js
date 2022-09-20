import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
      <Tab.Navigator headerMode='none'>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Explore' component={ExploreScreen} />
        <Tab.Screen name='Communities' component={HomeScreen} />
        <Tab.Screen name='Social' component={HomeScreen} />
      </Tab.Navigator>
  );
}