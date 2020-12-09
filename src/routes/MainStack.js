import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitle: 'Hello World !',
      headerTintColor: '#F0F',
    }}
  >
    <Screen name="Home" component={Home} />
  </Navigator>
);
