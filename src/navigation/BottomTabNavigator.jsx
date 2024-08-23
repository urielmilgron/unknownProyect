import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import FoodScreen from '../screens/FoodScreen'
import MeditationScreen from '../screens/MeditationScreen'
import ProfileScreen from '../screens/ProfileScreen'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen}/>
        <BottomTab.Screen name="Food" component={FoodScreen}/>
        <BottomTab.Screen name="Meditation" component={MeditationScreen}/>
        <BottomTab.Screen name="Profile" component={ProfileScreen}/>
    </BottomTab.Navigator>
  )
}
