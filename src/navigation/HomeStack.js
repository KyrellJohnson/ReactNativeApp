import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeTabNavigator from './tab-navigation/HomeTabNavigation';

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
      <Tab.Navigator headerMode='none' screenOptions={{headerShown: true}}>
        <Tab.Screen name='Home' component={HomeTabNavigator} />
        <Tab.Screen name='Explore' component={ExploreScreen} />
        <Tab.Screen name='Social' component={HomeScreen} />
        <Tab.Screen name='Profile' component={HomeScreen} />
      </Tab.Navigator>
  );
}