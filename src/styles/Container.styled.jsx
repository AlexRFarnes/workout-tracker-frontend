import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const PagesContainer = styled(Container)`
  padding: 20px;
`;

export const NavigationContainer = styled(Container)`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
