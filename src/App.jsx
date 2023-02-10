import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect } from 'react';

function App() {
  const { user, dispatch } = useAuthContext();

  useEffect(() => {
    const data = localStorage.getItem('WORKOUTS_TRACKER_user') || null;
    if (data) {
      dispatch({ type: 'LOGIN', payload: data });
    }
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route
          index
          element={user ? <Home /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/:id/edit'
          element={<Edit />}
          // element={user ? <Edit /> : <Navigate replace to='/login' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate replace to='/' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate replace to='/' />}
        />
        <Route path='*' element={<Page404 />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <div className='App' />
    </RouterProvider>
  );
}

export default App;
