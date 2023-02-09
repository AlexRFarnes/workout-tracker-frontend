import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import api from '../api';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const { dispatch } = useAuthContext();

  const signup = async values => {
    try {
      setIsLoading(true);
      setError(null);

      const { data } = await api.post('/user/signup', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({ type: 'LOGIN', payload: data });
      localStorage.setItem('WORKOUTS_TRACKER_user', JSON.stringify(data));
    } catch (err) {
      setError(err?.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, signup };
};
