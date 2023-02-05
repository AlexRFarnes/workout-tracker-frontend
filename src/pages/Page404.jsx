import { Link } from 'react-router-dom';
import { PagesContainer } from '../styles/Container.styled';
import styled from 'styled-components';

const Wrapper = styled(PagesContainer)`
  text-align: center;
  margin-top: 10rem;
  font-size: 1.3rem;

  a {
    text-decoration: none;
    color: var(--primary-color);
  }
`;

function Page404() {
  return (
    <Wrapper>
      <h2>Ooops!</h2>
      <p>Something seems to have gone wrong!</p>
      <Link to='/' replace={true}>
        Go to Home
      </Link>
    </Wrapper>
  );
}

export default Page404;
