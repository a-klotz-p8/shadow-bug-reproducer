import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import LoginMethod from '../screens/login/LoginMethod';
import Registration from '../screens/login/Registration';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginMethod"
        component={LoginMethod}
        options={{header: props => <View />}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{header: props => <View />}}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
