import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExploreScreen from '../../screens/ExploreScreen';
import HomeScreen from '../../screens/HomeScreen';
import HomeMainFeed from '../../screens/home/HomeMainFeed';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabNavigator() {

  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={({route}) => ({
        
    })}>
      <Tab.Screen name="New" component={HomeScreen}/>
      <Tab.Screen name="Main" component={HomeMainFeed}/>
      <Tab.Screen name="Discover" component={ExploreScreen}/>
    </Tab.Navigator>
  );
}