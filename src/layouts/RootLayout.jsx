import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { PagesContainer } from '../styles/Container.styled';

function RootLayout() {
  return (
    <>
      <Header />
      <PagesContainer>
        <Outlet />
      </PagesContainer>
    </>
  );
}

export default RootLayout;
