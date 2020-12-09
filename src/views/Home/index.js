import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { UserContext } from '../../context/UserContext';
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

const Home = (props) => {
  const { navigate } = useNavigation();
  const { state, dispatch } = useContext(UserContext);

  function handleNavigateToPerfilUser(user) {
    navigate('UserForm', user);
  }

  function handleConfirmUserToDelete(user) {
    Alert.alert('Excluir usuário', 'Você deseja excluir o usuário ?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user,
          });
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
        data={state.users}
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
                <ButtonOptions onPress={() => handleNavigateToPerfilUser(user)}>
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
