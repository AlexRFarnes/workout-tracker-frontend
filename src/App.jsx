import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
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
