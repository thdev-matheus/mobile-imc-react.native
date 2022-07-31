import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";
import Title from "./src/components/Title";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import { global } from "./src/globalStyles";

export default function App() {
  return (
    <ThemeProvider theme={global}>
      <Container>
        <Title />
        <Main />
      </Container>
    </ThemeProvider>
  );
}
