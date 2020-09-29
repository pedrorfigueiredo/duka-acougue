import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: flex;
  padding: 20px 4%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;