import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 0 0 20px;
  background-color: #ccc;
`;

export const FormArea = styled.View`
  margin-bottom: 20px;
`;
export const Label = styled.Text`
  font-size: 22px;
  margin-bottom: 10px;
`;
export const Input = styled.TextInput`
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 50px;
  font-size: 18px;
  padding-left: 20px;
  border: 2px solid #8473d9;
  border-radius: 6px;
  margin-bottom: 10px;
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SaveButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60%;
  border: 2px solid #38e079;
  elevation: 10;
  border-radius: 8px;
  background-color: #8473d9;
`;

export const SaveButtonText = styled.Text`
  color: #f9f9f9;
  letter-spacing: 1.4px;
  font-weight: bold;
`;
