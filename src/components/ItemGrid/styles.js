import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 30px 50px;
  grid-gap: 30px 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
`;