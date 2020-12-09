import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';
import { Feather } from '@expo/vector-icons';

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  height: 50px;
  width: 50px;
`;

const ButtonText = styled.Text``;

export const ButtonRight = () => {
  const { navigate } = useNavigation();

  function handleNavigationToAddUser() {
    navigate('UserForm');
  }
  return (
    <Button onPress={handleNavigationToAddUser}>
      <ButtonText>
        <Feather name="user-plus" size={34} color="#4527db" />
      </ButtonText>
    </Button>
  );
};
