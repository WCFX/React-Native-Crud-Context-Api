import React, { useState, useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/UserContext';
import {
  Container,
  FormArea,
  Label,
  Input,
  SaveButton,
  SaveButtonText,
  ContainerButton,
} from './styles';

const NewUser = ({ route, params }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const { dispatch } = useContext(UserContext);

  const { goBack } = useNavigation();

  function handleAddNewUser() {
    dispatch({ type: 'createUser', payload: user });
    goBack('Home');
  }

  return (
    <Container>
      <FormArea>
        <Label>Nome</Label>
        <Input
          value={user.name}
          autoCapitalize
          onChangeText={(name) => setUser({ ...user, name })}
          placeholder="Informe o seu nome"
        />
        <Label>Email</Label>
        <Input
          value={user.email}
          autoCapitalize="none"
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Informe o seu email"
        />
        <Label>URL do Avatar</Label>
        <Input
          value={user.avatar_url}
          autoCapitalize="none"
          onChangeText={(avatar_url) => setUser({ ...user, avatar_url })}
          placeholder="Informe a URL do Avatar"
        />
        <ContainerButton>
          <SaveButton onPress={handleAddNewUser}>
            <Feather name="save" size={24} color="#38e079" />
            <SaveButtonText>Salvar Novo Usuário</SaveButtonText>
          </SaveButton>
        </ContainerButton>
      </FormArea>
    </Container>
  );
};

export default NewUser;
