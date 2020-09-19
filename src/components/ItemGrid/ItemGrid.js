import React from "react";
import PropTypes from "prop-types";
import ItemCard from "./ItemCard/ItemCard";
import { Wrapper } from "./styles";

const ItemGrid = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <ItemCard key={item._id} item={item}></ItemCard>
      ))}
    </Wrapper>
  );
};

ItemGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemGrid;
