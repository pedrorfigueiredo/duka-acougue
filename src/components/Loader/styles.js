import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Animation = styled.div`
  border: 4px solid ${(props) => props.theme.colors.surface};
  border-top: 4px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;
