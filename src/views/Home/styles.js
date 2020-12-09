import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #8473d9;
  font-weight: bold;
`;

export const ContainerUsers = styled.View`
  margin-top: 10px;
`;

export const List = styled.FlatList`
  width: 100%;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 3px solid #0ead4b;
`;

export const Contacts = styled.View`
  justify-content: space-around;
  padding: 10px 20px;
`;

export const ContainerImg = styled.View`
  flex-direction: row;
  padding: 20px 10px;
`;

export const ButtonUser = styled.TouchableOpacity``;
