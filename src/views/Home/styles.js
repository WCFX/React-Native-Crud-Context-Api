import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #8473d9;
  font-weight: bold;
  text-decoration: underline;
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
  border: 3px #38e079;
`;

export const Contacts = styled.View`
  justify-content: space-around;
  width: 200px;
  margin-left: -30px;
`;

export const ContainerImg = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10px;
`;

export const ButtonUser = styled.TouchableOpacity``;
export const ContainerButtonOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;
export const ButtonOptions = styled.TouchableOpacity``;
