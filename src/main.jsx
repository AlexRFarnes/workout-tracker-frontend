import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WorkoutsContextProvider from './context/WorkoutsContext';
import UserContextProvider from './context/UserContext';
import GlobalStyles from './styles/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <WorkoutsContextProvider>
        <GlobalStyles />
        <App />
      </WorkoutsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
