import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 8%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 4%;
  }
`;