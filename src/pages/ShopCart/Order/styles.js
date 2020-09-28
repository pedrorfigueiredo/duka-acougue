import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  margin-bottom: 5px;
  position: relative;
`;

export const RemoveButton = styled.div`
  background: ${props => props.theme.colors.surface};
  font-size: 1.4em;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  border: 1px solid ${props => props.theme.colors.primaryLight};
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 100%;
  @media (max-width: 768px) {
    width: 150px;
  } ;
`;

export const Name = styled.div`
  font-size: ${(props) => props.theme.fontSizes.large};
  flex: 3;
  display: flex;
  padding: 10px;
  align-items: center;
  @media (max-width: 768px) {
    flex: 2;
  } ;
`;

export const Option = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
`;

export const Quantity = styled(Option)``;

export const Price = styled(Quantity)`
  color: ${(props) => props.theme.fonts.price};
`;
