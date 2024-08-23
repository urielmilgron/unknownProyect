import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <BottomTabNavigator/>
    </NavigationContainer>
  );
}

