import axios from 'axios';
import { useEffect, useState } from 'react';
import { GridLayout } from '../layouts/GridLayout';
import WorkoutDetails from '../components/WorkoutDetails';
import BaseForm from '../components/BaseForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function Home() {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const initialValues = {
    title: '',
    loadUnits: 'kg',
    load: 0,
    series: '',
    reps: '',
  };

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const { data, request } = await axios.get(
          'http://localhost:4000/api/workouts'
        );
        if (request.status === 200) {
          dispatch({ type: 'SET_WORKOUTS', payload: data });
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
    fetchWorkouts();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setError(null);
      setEmptyFields([]);
      values.load = values.load || 0;
      const { data, request } = await axios.post(
        'http://localhost:4000/api/workouts',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (request.status === 200) {
        dispatch({ type: 'CREATE_WORKOUT', payload: data });
        resetForm();
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
      setEmptyFields(error.response.data.emptyFields);
    }
  };

  return (
    <GridLayout>
      <div>
        {workouts &&
          workouts.map(wk => <WorkoutDetails key={wk._id} workout={wk} />)}
      </div>
      <BaseForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        buttonText='Add workout'
        title='Add a new workout'
        emptyFields={emptyFields}
        error={error}
      />
    </GridLayout>
  );
}

export default Home;
