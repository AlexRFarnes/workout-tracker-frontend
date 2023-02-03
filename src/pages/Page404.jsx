import { PagesContainer } from '../styles/Container.styled';
import styled from 'styled-components';

const Wrapper = styled(PagesContainer)`
  text-align: center;
  margin-top: 10rem;
  font-size: 1.3rem;
`;

function Page404() {
  return (
    <Wrapper>
      <h2>Ooops!</h2>
      <p>Something seems to have gone wrong!</p>
    </Wrapper>
  );
}

export default Page404;
