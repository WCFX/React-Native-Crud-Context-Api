import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  FormArea,
  Label,
  Input,
  SaveButton,
  SaveButtonText,
  ContainerButton,
} from './styles';

const UserForm = ({ route, params }) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  // const [email, setEmail] = useState(route.params ? route.params : {});
  // const [avatar, setAvatar] = useState(route.params ? route.params : {});

  return (
    <Container>
      <FormArea>
        <Label>Nome</Label>
        <Input
          value={user.name}
          onChangeText={(name) => setUser({ ...user, name })}
          placeholder="Informe o seu nome"
        />
        <Label>Email</Label>
        <Input
          value={user.email}
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Informe o seu email"
        />
        <Label>URL do Avatar</Label>
        <Input
          value={user.avatar_url}
          onChangeText={(avatar_url) => setUser({ ...user, avatar_url })}
          placeholder="Informe a URL do Avatar"
        />
        <ContainerButton>
          <SaveButton>
            <Feather name="save" size={24} color="#38e079" />
            <SaveButtonText>Salvar</SaveButtonText>
          </SaveButton>
        </ContainerButton>
      </FormArea>
    </Container>
  );
};

export default UserForm;
