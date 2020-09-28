import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 0 0 350px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 5px;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.surface};
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.div``;

export const Price = styled.div`
  font-size: ${(props) => props.theme.fontSizes.huge};
  color: ${(props) => props.theme.fonts.price};
`;

export const Button = styled.button`
  margin-top: 5px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  align-self: flex-end;
  cursor: pointer;
  border-radius: 3px;
  padding: 15px;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;