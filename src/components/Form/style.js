import styled from "styled-components/native";

export const Container = styled.View`
  width: 300px;
  height: 290px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid ${(props) => props.theme.cores.white};
  border-radius: 16px;

  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;

  margin-bottom: 8px;

  color: ${(props) => props.theme.cores.white};
`;

export const MainButton = styled.TouchableOpacity`
  height: 48px;
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  margin-top: 8px;

  background-color: ${(props) => props.theme.cores.pink};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;

  color: ${(props) => props.theme.cores.white};
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.cores.gray,
}))`
  height: 50px;
  width: 80%;

  margin-bottom: 16px;
  padding: 0 16px;

  border-radius: 5px;

  background-color: ${(props) => props.theme.cores.white};
`;
