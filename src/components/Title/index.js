import React from "react";
import { Text, View } from "react-native";
import { Container, TextTitle } from "./styles.js";

export default function Title() {
  return (
    <Container>
      <TextTitle>Bem-Vindo(a),</TextTitle>
      <TextTitle>Calcule o seu IMC</TextTitle>
    </Container>
  );
}
