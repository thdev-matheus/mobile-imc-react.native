import React from "react";
import { View, Text } from "react-native";
import { Box, Container, ResText } from "./style";

export default function ResultImc({ resultImc, messageResultImc }) {
  return (
    <Box>
      <Container>
        <ResText>{messageResultImc}</ResText>
        <ResText>{resultImc}</ResText>
      </Container>
    </Box>
  );
}
