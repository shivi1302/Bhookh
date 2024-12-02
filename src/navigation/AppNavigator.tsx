// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenNames from './ScreenNames';
import LoginScreen from '../views/Login/LoginScreen';
import HomeScreen from '../views/Home/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= {ScreenNames.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
