/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import LoginNavigator from './src/navigation/LoginNavigator';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
