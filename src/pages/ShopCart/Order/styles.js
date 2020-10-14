import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    'image name option quantity price' 1fr
    / 200px 3fr 2fr 2fr 2fr;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  margin-bottom: 10px;
  position: relative;
  @media (max-width: 768px) {
    grid-template:
      'image name name' 2fr
      'option quantity price' 1fr
      / 1fr 1fr 1fr;
  } ;
`;

export const RemoveButton = styled.div`
  background: ${(props) => props.theme.colors.surface};
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
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const Image = styled.img`
  grid-area: image;
  width: 100%;
  height: auto;
`;

export const Name = styled.div`
  grid-area: name;
  font-size: ${(props) => props.theme.fontSizes.large};
  display: flex;
  padding: 10px;
  align-items: center;
  @media (max-width: 768px) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  } ;
`;

export const Option = styled.div`
  grid-area: option;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  text-align: center;
`;

export const Quantity = styled(Option)`
  grid-area: quantity;
`;

export const Price = styled(Quantity)`
  grid-area: price;
  color: ${(props) => props.theme.fonts.price};
`;
