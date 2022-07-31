import React, { useState } from "react";
import { Text, View } from "react-native";
import ResultImc from "./ResultImc";
import { ButtonText, Container, Input, Label, MainButton } from "./style";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setImc] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [textButton, setTextButton] = useState("Calcular");

  const imcCalculator = () => {
    const resultImc = (weight / height ** 2).toFixed(2);
    return setImc(resultImc);
  };

  const validationImc = () => {
    weight != null && height != null
      ? (imcCalculator(),
        setHeight(""),
        setWeight(""),
        setMessageImc("Seu IMC é: "),
        setTextButton("Calcular Novamente"))
      : (setImc(""),
        setTextButton("Calcular"),
        setMessageImc("Preencha o peso e altura"));
  };

  return (
    <View>
      <Container>
        <Label>Altura</Label>
        <Input
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
        />
        <Label>Peso</Label>
        <Input
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75.375"
          keyboardType="numeric"
        />
        <MainButton
          onPress={(e) => {
            validationImc();
          }}
        >
          <ButtonText>{textButton}</ButtonText>
        </MainButton>
      </Container>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
