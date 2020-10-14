import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const ItemGrid = styled.div`
  display: grid;
`;

export const Error = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.huge};
  color: ${(props) => props.theme.fonts.error};
`;
