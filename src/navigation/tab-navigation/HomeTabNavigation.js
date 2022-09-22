import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreScreen from '../../screens/ExploreScreen';
import HomeScreen from '../../screens/HomeScreen';
import HomeMain from '../../screens/home/HomeMain';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabNavigator() {

  return (
    <Tab.Navigator initialRouteName="Main">
      <Tab.Screen name="New" component={HomeScreen}/>
      <Tab.Screen name="Main" component={HomeMain}/>
      <Tab.Screen name="Discover" component={ExploreScreen}/>
    </Tab.Navigator>
  );
}