import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 200px;
  min-height: 50px;
  background: ${(props) => props.theme.colors.primary};
  @media (max-width: 768px) {
    padding: 0 5%;
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
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Item = styled(Logo)`
  font-size: ${(props) => props.theme.fontSizes.medium};
  transition: 0.2s;
  :hover, &.active{
    background: ${(props) => props.theme.colors.primaryDark};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Cart = styled(Item)`
  @media (max-width: 768px) {
    display: flex;
  }
`;
