import React from 'react';
import Order from '../Order';
import {Wrapper} from './styles';

const OrderList = ({orders, handleRemoveOrder}) => {
  return <Wrapper>
    {orders && orders.map(order => (
      <Order key={order.id} order={order} handleRemoveOrder={handleRemoveOrder} />
    ))}
  </Wrapper>
};

export default OrderList;