import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    visibility: hidden;
  }
`;

const slideInFromLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

export const Nav = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60%;
  background: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  animation: 0.2s ease-out 0s 1 ${slideInFromLeft};
`;

export const HeadItem = styled(Link)`
  font-size: 1.2em;
  color: ${(props) => props.theme.fonts.primaryDark};
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

export const Item = styled(Link)`
  display: flex;
  padding: 20px 10px;
  color: ${(props) => props.theme.fonts.primary};
  background: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

export const Panel = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 8;
  background: rgba(100, 100, 100, 0.8);
`;
