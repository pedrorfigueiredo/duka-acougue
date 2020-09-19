import React from "react";
import { Wrapper, Item } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Item to="/categoria/bovinos" >Bovinos</Item>
      <Item to="/categoria/suinos" >Suínos</Item>
      <Item to="/categoria/aves" >Aves</Item>
      <Item to="/categoria/bebidas" >Bebidas</Item>
      <Item to="/categoria/acessorios" >Acessórios para Churrasco</Item>
    </Wrapper>
  );
};

export default Navbar;
