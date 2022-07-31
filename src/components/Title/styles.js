import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TextTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 8px;

  color: ${(props) => props.theme.cores.pink};
`;
