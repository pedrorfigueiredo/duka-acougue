import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  background: ${(props) => props.theme.colors.primaryDark};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: ${(props) => props.theme.fonts.primaryDark};
  transition: 0.2s;
  :hover,
  &.active {
    background: ${(props) => props.theme.colors.primary};
  }
`;
