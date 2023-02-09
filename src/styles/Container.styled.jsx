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

export const FormContainer = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 40px auto 20px;
  background: var(--light-color);
  border-radius: var(--border-radius);
  padding: 20px 30px 30px;
  box-shadow: var(--box-shadow);
`;
