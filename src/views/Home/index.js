import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
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
  return (
    <Container>
      <List
        keyExtractor={(item) => item.id.toString()}
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
                  <AntDesign name="edit" size={24} color="#fff" />
                </ButtonOptions>
                <ButtonOptions>
                  <AntDesign name="delete" size={24} color="#fff" />
                </ButtonOptions>
              </ContainerButtonOptions>
            </ContainerImg>
          </ContainerUsers>
        )}
      />
    </Container>
  );
};

export default Home;
