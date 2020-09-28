import React from "react";
import { Wrapper, Title, Row, Label, Price, Button } from "./styles";

const Summary = ({ semiTotal }) => {
  return (
    <Wrapper>
      <Title>Resumo do Pedido</Title>
      <Row>
        <Label>Total</Label>
        <Price>R$ {semiTotal.toFixed(2)}</Price>
      </Row>
      <Button>Continuar</Button>
    </Wrapper>
  );
};

export default Summary;
