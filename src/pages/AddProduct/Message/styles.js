import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h2`
  color: ${(props) => props.theme.fonts.error};
  font-size: ${(props) => props.theme.fontSizes.huge};
  margin-bottom: 15px;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;
