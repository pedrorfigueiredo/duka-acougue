import React from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  Logo,
  Hamburger,
  ItemList,
  Item,
  Cart,
  Counter,
} from "./styles";
import { BiCart } from "react-icons/bi";

const Header = () => {
  const orders = useSelector((state) => state.shopCart.orders);

  return (
    <Wrapper>
      <ItemList>
        <Hamburger>Menu</Hamburger>
        <Logo to="/">Só Carnes Silva</Logo>
      </ItemList>
      <ItemList>
        <Item to="/sobre">Quem somos?</Item>
        <Item to="/adicionar">Adicionar produto</Item>
        <Item to="/login">Login</Item>
        <Cart to="/carrinho">
          <BiCart style={{ fontSize: "1.5em" }} />
          {orders.length > 0 && <Counter>{orders.length}</Counter>}
        </Cart>
      </ItemList>
    </Wrapper>
  );
};

export default Header;
