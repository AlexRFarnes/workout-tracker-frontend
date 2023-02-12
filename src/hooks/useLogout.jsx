import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
  const { dispatch: dispatchWorkout } = useWorkoutsContext();
  const { dispatch } = useAuthContext();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    dispatchWorkout({ type: 'SET_WORKOUTS', payload: null });
    localStorage.removeItem('WORKOUTS_TRACKER_user');
  };

  return { logout };
};
