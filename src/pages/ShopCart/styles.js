import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 20px 2%;
`;

export const Grid = styled.div`
  width: 1200px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  align-items: flex-start;
`;