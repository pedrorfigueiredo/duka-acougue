import React from "react";
import { Wrapper, Title, Row, Label, Price, Button, Items } from "./styles";

const Summary = ({ semiTotal, orders }) => {
  return (
    <Wrapper>
      <Title>Resumo do Pedido</Title>
      {orders.length > 1 ? <Items>{orders.length} itens</Items> : <Items>{orders.length} item</Items>}
      <Row>
        <Label>Total</Label>
        <Price>R$ {semiTotal.toFixed(2)}</Price>
      </Row>
      <Button>Continuar</Button>
    </Wrapper>
  );
};

export default Summary;
