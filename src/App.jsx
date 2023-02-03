import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Page404 from './pages/Page404';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='/:id/edit' element={<Edit />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <div className='App'>
        <h1>Hello world!</h1>
      </div>
    </RouterProvider>
  );
}

export default App;
