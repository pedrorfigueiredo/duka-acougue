import React from "react";
import { Wrapper, Logo, Hamburger, ItemList, Item, Cart } from "./styles";

const Header = () => {
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
        <Cart to="/carrinho">Cart</Cart>
      </ItemList>
    </Wrapper>
  );
};

export default Header;
