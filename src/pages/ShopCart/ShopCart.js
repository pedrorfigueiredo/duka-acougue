import React from "react";
import OrderList from "./OrderList";
import Summary from "./Summary";
import { Error } from "../../components/styles";
import { Wrapper, Grid } from "./styles";

const ShopCart = ({ orders, handleRemoveOrder, semiTotal }) => {
  return (
    <Wrapper>
      {orders.length > 0 ? (
        <Grid>
          <OrderList orders={orders} handleRemoveOrder={handleRemoveOrder} />
          <Summary semiTotal={semiTotal}/>
        </Grid>
      ) : (
        <Error>Seu carrinho está vazio.</Error>
      )}
    </Wrapper>
  );
};

export default ShopCart;
