import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WorkoutsContextProvider from './context/WorkoutsContext';
import AuthContextProvider from './context/AuthContext';
import './index.css';
import ThemeContextProvider from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
