import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import api from '../api';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async values => {
    try {
      const { data } = await api.post('/user/login', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: 'LOGIN', payload: data });

      localStorage.setItem('WORKOUTS_TRACKER_user', JSON.stringify(data));
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.log(err);
      }
    }
  };

  return { login, error };
};
