/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};
export default App;
