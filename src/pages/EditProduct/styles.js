import styled from "styled-components";

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
  min-height: 700px;
  width: 400px;
  margin: 20px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Input = styled.input`
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 40px;
  padding: 0 5px;
`;

export const TextArea = styled.textarea`
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 40px;
  padding: 5px 5px;
  resize: none;
  height: 60px;
`;

export const Error = styled.span`
  color: ${(props) => props.theme.fonts.error};
  font-size: ${(props) => props.theme.fontSizes.small};
  align-self: flex-end;
  height: 5px;
`;

export const Select = styled.select`
  font-size: ${(props) => props.theme.fontSizes.medium};
  height: 40px;
  padding: 0 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const FileMessage = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 5px;
  border-top: 1px solid #EBE9ED;
  border-left: 1px solid #EBE9ED;
  border-bottom: 1px solid #EBE9ED;
`;

export const UploadButton = styled.label`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: 1px solid ${(props) => props.theme.colors.primary};
  align-self: flex-end;
  cursor: pointer;
  border-radius: 3px;
  padding: 10px 40px;
  transition: 0.2s;
  :hover {
    opacity: 70%;
  }
`;

export const OptionInput = styled.input`
  font-size: ${(props) => props.theme.fontSizes.small};
  height: 30px;
  padding: 0 5px;
  margin-bottom: 5px;
`;

export const OptionButton = styled(UploadButton)`
  justify-self: flex-end;
  padding: 5px 10px;
  margin-left: 5px;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;