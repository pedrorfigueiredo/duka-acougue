import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  animation: 0.5s ${fadeInAnimation};
  align-self: flex-start;
  width: 800px;
  margin: 20px 0;
  display: grid;
  grid-template:
    'header header' 50px
    'main form' 1fr
    / 4fr 5fr;
  grid-column-gap: 10px;
  @media (max-width: 768px) {
    grid-template:
      'header' 50px
      'main' auto
      'form' 1fr
      / 1fr;
    padding: 5%;
    margin: 0;
    grid-row-gap: 10px;
  } ;
`;

export const Header = styled.div`
  display: flex;
  grid-area: header;
`;

export const IconHandler = styled(Link)`
  margin-right: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.4em;
`;

export const Main = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.gargantuan};
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.large};
  text-align: justify;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 3px;
`;

export const Form = styled.form`
  grid-area: 'form';
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  font-size: ${(props) => props.theme.fontSizes.large};
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.fonts.primaryLight};
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Option = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  :last-child {
    border-bottom: none;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 5px;
  resize: none;
  height: 70px;
`;

export const InputError = styled.span`
  color: ${(props) => props.theme.fonts.error};
  font-size: ${(props) => props.theme.fontSizes.small};
  align-self: flex-end;
  padding: 5px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  cursor: pointer;
  border-radius: 3px;
  padding: 15px;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.colors.primaryLight};
  }
  display: flex;
  justify-content: space-around;
`;

export const TotalPrice = styled.span``;

export const DeleteButton = styled.button`
  margin-left: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: inherit;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-size: 1.4em;
`;

export const ReturnButton = styled(DeleteButton)`
  margin-left: 0;
  margin-right: 20px;
  font-size: 1.4em;
`;
