import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.cores.black};
`;
