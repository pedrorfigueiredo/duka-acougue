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
  height: 80px;
  background: ${(props) => props.theme.colors.surface};
  font-size: ${(props) => props.theme.fontSizes.gargantuan};
`;

export const Form = styled.form`
  align-self: center;
  height: 350px;
  width: 300px;
  margin: 10px;
  padding: 5px 20px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.surface};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  font-size: ${props => props.theme.colors.medium};
  height: 30px;
  padding: 0 5px;
`;

export const TextArea = styled.textarea`
  font-size: ${props => props.theme.colors.medium};
  height: 30px;
  padding: 5px 5px;
  resize: vertical;
  height: 60px;
  overflow-y: hidden;
`;

export const Error = styled.span`
  color: ${props => props.theme.fonts.error};
  font-size: ${props => props.theme.fontSizes.small};
  align-self: flex-end;
  height: 5px;
`;

export const Select = styled.select``;

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  align-self: flex-end;
  cursor: pointer;
  border-radius: 3px;
  padding: 10px;
  transition: 0.2s ease-in;
  :hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

