import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/:id/edit' element={<Edit />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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
