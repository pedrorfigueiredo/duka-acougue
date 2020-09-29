import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeOrder } from "../../store/ducks/shopCart";
import ShopCart from "./ShopCart";

const ShopCartContainer = () => {
  const orders = useSelector((state) => state.shopCart.orders);
  const semiTotal = useSelector((state) => state.shopCart.semiTotal);
  const tax = useSelector((state) => state.shopCart.tax);
  const dispatch = useDispatch();

  const handleRemoveOrder = (orderId) => {
    dispatch(removeOrder(orderId));
  };

  return <ShopCart orders={orders} handleRemoveOrder={handleRemoveOrder} semiTotal={semiTotal} tax={tax} />;
};

export default ShopCartContainer;
