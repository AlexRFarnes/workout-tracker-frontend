import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WorkoutsContextProvider from './context/WorkoutsContext';
import AuthContextProvider from './context/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <GlobalStyles />
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
