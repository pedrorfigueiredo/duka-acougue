import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 0 20px;
  background: ${(props) => props.theme.colors.surface};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.gargantuan};
`;
