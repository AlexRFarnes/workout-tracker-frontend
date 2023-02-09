import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 100px;

  @media (max-width: 960px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1.25fr 1fr;
  }

  @media (max-width: 680px) {
    display: block;
  }
`;
