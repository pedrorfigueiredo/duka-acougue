import React from 'react';
import ItemCard from './ItemCard/ItemCard';
import { Wrapper } from './styles';

const ItemGrid = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </Wrapper>
  );
};

export default ItemGrid;
