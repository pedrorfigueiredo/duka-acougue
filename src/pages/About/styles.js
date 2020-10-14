import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;

  display: flex;
  padding: 30px 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 10px;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const TextSection = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0;
    order: -1;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Paragraph = styled.div`
  text-align: justify;
  margin-bottom: 10px;
`;
