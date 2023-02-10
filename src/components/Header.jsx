import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { SecondaryButton } from '../styles/Button.styled';
import { NavigationContainer } from '../styles/Container.styled';

const Wrapper = styled.header`
  background: var(--primary-color);

  a {
    color: var(--light-color);
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease-in;
    transition-property: opacity, border-color;
  }

  a.active {
    border-bottom: 2px solid var(--light-color);
  }

  a:hover {
    opacity: 0.8;
  }
`;

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <Wrapper>
      <NavigationContainer>
        <Link to='/'>
          <h1>Workout Tracker</h1>
        </Link>
        <Navigation>
          {!user && (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/login'>
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to='/signup'>
                Signup
              </NavLink>
            </>
          )}
          {user && (
            <SecondaryButton style={{ fontSize: '1rem' }} onClick={logout}>
              Logout
            </SecondaryButton>
          )}
        </Navigation>
      </NavigationContainer>
    </Wrapper>
  );
}

export default Header;
