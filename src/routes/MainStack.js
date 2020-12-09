import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import UserForm from '../views/UserForm';
import { ButtonRight } from '../components/ButtonRight';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#4527db',
    }}
  >
    <Screen
      options={{
        headerTitle: 'Lista de usuários',
        headerRight: () => <ButtonRight />,
      }}
      name="Home"
      component={Home}
    />
    <Screen
      options={{ headerTitle: 'Formulário' }}
      name="UserForm"
      component={UserForm}
    />
  </Navigator>
);
