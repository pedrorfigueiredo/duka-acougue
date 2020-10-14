import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  min-height: 50px;
  background: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    padding: 0 2%;
  }
`;

export const ItemList = styled.div`
  display: flex;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: ${(props) => props.theme.fontSizes.huge};
  color: ${(props) => props.theme.fonts.primary};
`;

export const Hamburger = styled.span`
  display: none;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.fonts.primary};
  font-size: 1.6em;
  padding: 10px 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Item = styled(Logo)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  transition: 0.2s;
  :hover,
  &.active {
    background: ${(props) => props.theme.colors.primaryDark};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cart = styled(Item)`
  position: relative;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Counter = styled.span`
  position: absolute;
  z-index: 5;
  bottom: 5px;
  right: 10px;
  background: ${(props) => props.theme.colors.surface};
  color: black;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  font-size: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
`;
