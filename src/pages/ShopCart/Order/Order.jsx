import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import {
  Wrapper,
  RemoveButton,
  Image,
  Name,
  Quantity,
  Price,
  Option,
} from './styles';

const Order = ({ order, handleRemoveOrder }) => {
  return (
    <Wrapper>
      <RemoveButton onClick={() => handleRemoveOrder(order.id)}>
        <RiDeleteBinLine />
      </RemoveButton>
      <Image src={order.image} />
      <Name>{order.name}</Name>
      <Option>{order.option}</Option>
      <Quantity>
        {order.quantity.toFixed(2)} {order.unit}
      </Quantity>
      <Price>R$ {order.totalPrice.toFixed(2)}</Price>
    </Wrapper>
  );
};

export default Order;
