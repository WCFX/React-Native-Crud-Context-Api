import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';
import {
  Container,
  Title,
  List,
  ContainerUsers,
  ButtonUser,
  Avatar,
  Contacts,
  ContainerImg,
  ContainerButtonOptions,
  ButtonOptions,
} from './styles';

import data from '../../data';

const Home = () => {
  const { navigate } = useNavigation();

  function handleNavigateToPerfilUser(user) {
    navigate('UserForm', user);
  }

  function handleConfirmUserToDelete(user) {
    Alert.alert('Excluir usuário', 'Você deseja excluir o usuário ?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('Delete', user.id);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }
  return (
    <Container>
      <List
        data={data}
        renderItem={({ item: user }) => (
          <ContainerUsers>
            <ContainerImg
              style={{ borderBottomWidth: 1, borderBottomColor: '#424242' }}
            >
              <Avatar source={{ uri: user.avatar_url }} />
              <Contacts>
                <ButtonUser onPress={() => handleNavigateToPerfilUser(user)}>
                  <Title>{user.name}</Title>
                  <Title>{user.email}</Title>
                </ButtonUser>
              </Contacts>

              <ContainerButtonOptions>
                <ButtonOptions>
                  <AntDesign name="edit" size={24} color="#38e079" />
                </ButtonOptions>
                <ButtonOptions onPress={() => handleConfirmUserToDelete(user)}>
                  <AntDesign name="delete" size={24} color="#eb506f" />
                </ButtonOptions>
              </ContainerButtonOptions>
            </ContainerImg>
          </ContainerUsers>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

export default Home;
