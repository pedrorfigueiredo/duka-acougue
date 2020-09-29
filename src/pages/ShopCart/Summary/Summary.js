import React from "react";
import {
  Wrapper,
  Title,
  Row,
  Label,
  Price,
  Button,
  Items,
  MiniPrice
} from "./styles";

const Summary = ({ semiTotal, orders, tax }) => {
  return (
    <Wrapper>
      <Title>Resumo do Pedido</Title>
      <Row>
        {orders.length > 1 ? (
          <Items>{orders.length} itens</Items>
        ) : (
          <Items>{orders.length} item</Items>
        )}
        <MiniPrice>R$ {semiTotal.toFixed(2)}</MiniPrice>
      </Row>
      <Row>
        frete
        <MiniPrice>R$ {tax.toFixed(2)}</MiniPrice>
      </Row>
      <Row>
        <Label>Total</Label>
        <Price>R$ {(semiTotal + tax).toFixed(2) }</Price>
      </Row>
      <Button>Continuar</Button>
    </Wrapper>
  );
};

export default Summary;
