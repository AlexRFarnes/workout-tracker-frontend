import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutsContext';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      'useWorkoutsContext must be used insde of the WorkoutsContextProvider'
    );
  }

  return context;
};
