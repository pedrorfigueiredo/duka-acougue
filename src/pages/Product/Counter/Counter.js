import React from "react";
import { Wrapper, Value, Button } from "./styles";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = ({ quantity, handleQuantity }) => {
  return (
    <Wrapper>
      <Button onClick={() => handleQuantity("subtract")}>
        <FaMinus />
      </Button>
      <Value>{quantity.toFixed(2)}</Value>
      <Button onClick={() => handleQuantity("add")}>
        <FaPlus />
      </Button>
    </Wrapper>
  );
};

export default Counter;
