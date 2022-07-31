import styled from "styled-components/native";

export const Box = styled.View`
  width: 300px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;

  background-color: ${(props) => props.theme.cores.white};
`;

export const Container = styled.View`
  width: 285px;
  height: 85px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  border: 3px dashed ${(props) => props.theme.cores.pink};

  background-color: ${(props) => props.theme.cores.white};
`;

export const ResText = styled.Text`
  font-size: 23px;
  font-weight: bold;

  color: ${(props) => props.theme.cores.black};
`;
