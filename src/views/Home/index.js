import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  List,
  ContainerUsers,
  ButtonUser,
  Avatar,
  Contacts,
  ContainerImg,
} from './styles';

import data from '../../data';

const Home = () => {
  const { navigate } = useNavigation();

  function handleNavigateToPerfilUser() {
    navigate('UserForm');
  }
  return (
    <Container>
      <List
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={({ item }) => (
          <ContainerUsers>
            <ButtonUser onPress={handleNavigateToPerfilUser}>
              <ContainerImg
                style={{ borderBottomWidth: 1, borderBottomColor: '#424242' }}
              >
                <Avatar source={{ uri: item.avatar_url }} />
                <Contacts>
                  <Title>{item.name}</Title>
                  <Title>{item.email}</Title>
                </Contacts>
              </ContainerImg>
            </ButtonUser>
          </ContainerUsers>
        )}
      />
    </Container>
  );
};

export default Home;
