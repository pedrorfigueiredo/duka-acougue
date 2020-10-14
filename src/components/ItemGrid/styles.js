import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  display: grid;
  padding: 30px 50px;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
  animation: 0.5s ${fadeInAnimation};
`;
