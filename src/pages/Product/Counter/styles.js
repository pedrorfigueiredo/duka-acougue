import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin: 10px;
`;

export const Value = styled.div`
  padding: 15px 20px;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const Button = styled.div`
  padding: 15px 20px;
  cursor: pointer;
`;
