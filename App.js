import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UsersProvider from './src/context/UserContext';

import MainStack from './src/routes/MainStack';

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <MainStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </UsersProvider>
  );
}
