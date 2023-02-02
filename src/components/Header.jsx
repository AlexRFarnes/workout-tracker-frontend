import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationContainer } from '../styles/Container.styled';

const Wrapper = styled.header`
  background: var(--primary-color);

  a {
    color: var(--light-color);
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Wrapper>
      <NavigationContainer>
        <Link to='/'>
          <h1>Workout Tracker</h1>
        </Link>
      </NavigationContainer>
    </Wrapper>
  );
}

export default Header;
