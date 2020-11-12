import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { BiCart } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import {
  Wrapper,
  Logo,
  Hamburger,
  ItemList,
  Item,
  Cart,
  Counter,
} from './styles';

function Header({ handleOpenSidebar }) {
  const orders = useSelector((state) => state.shopCart.orders);

  return (
    <Wrapper>
      <ItemList>
        <Hamburger onClick={handleOpenSidebar}>
          <FiMenu />
        </Hamburger>
        <Logo to="/">Só Carnes Silva</Logo>
      </ItemList>
      <ItemList>
        <Item to="/sobre">Quem somos?</Item>
        <Item to="/adicionar">Adicionar produto</Item>
        <Item to="/login">Login</Item>
        <Cart to="/carrinho">
          <BiCart style={{ fontSize: '1.5em' }} />
          {orders.length > 0 && <Counter>{orders.length}</Counter>}
        </Cart>
      </ItemList>
    </Wrapper>
  );
}

Header.propTypes = {
  handleOpenSidebar: PropTypes.func.isRequired,
};

export default Header;
