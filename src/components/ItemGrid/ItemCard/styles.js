import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Wrapper = styled(Link)`
  min-height: 140px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    border: 1px solid ${(props) => props.theme.colors.primaryLight};
  }
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Description = styled.span`
  font-size: 0.9em;
  margin-bottom: auto;
  text-align: justify;
`;

export const Price = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.fonts.price};
`;

export const ImageContainer = styled.div`
  flex: 0 0 150px;
  border-radius: 3px;
  background: ${(props) => props.theme.colors.surface};
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 100%;
  border-radius: 3px;
`;
