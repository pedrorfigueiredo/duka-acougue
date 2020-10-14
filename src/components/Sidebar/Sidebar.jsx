import React from 'react';
import { Wrapper, Nav, HeadItem, Item, Panel } from './styles';

const Sidebar = ({ handleCloseSidebar }) => {
  return (
    <Wrapper>
      <Panel onClick={handleCloseSidebar} />
      <Nav>
        <HeadItem to="/sobre" onClick={handleCloseSidebar}>
          Quem somos?
        </HeadItem>
        <HeadItem to="/adicionar" onClick={handleCloseSidebar}>
          Adicionar Produto
        </HeadItem>
        <Item to="/categoria/bovinos" onClick={handleCloseSidebar}>
          Bovinos
        </Item>
        <Item to="/categoria/suinos" onClick={handleCloseSidebar}>
          Suínos
        </Item>
        <Item to="/categoria/aves" onClick={handleCloseSidebar}>
          Aves
        </Item>
        <Item to="/categoria/bebidas" onClick={handleCloseSidebar}>
          Bebidas
        </Item>
        <Item to="/categoria/acessorios" onClick={handleCloseSidebar}>
          Acessórios para Churrasco
        </Item>
      </Nav>
    </Wrapper>
  );
};

export default Sidebar;
