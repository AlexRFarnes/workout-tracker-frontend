import api from '../api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import WorkoutDetails from '../components/WorkoutDetails';
import BaseForm from '../components/BaseForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 100px;

  @media (max-width: 960px) {
    grid-template-columns: 1.5fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1.25fr 1fr;
  }

  @media (max-width: 680px) {
    display: block;

    .formWrapper {
      max-width: 400px;
      width: 90%;
      margin: 20px auto;
      background: var(--light-color);
      border-radius: var(--border-radius);
      padding: 20px;
      box-shadow: var(--box-shadow);
    }
  }
`;

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
        const { data } = await api.get('/workouts');

        dispatch({ type: 'SET_WORKOUTS', payload: data });
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        }
      }
    }
    fetchWorkouts();
  }, [dispatch]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.load = values.load || 0;
      const { data } = await api.post('/workouts', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setError(null);
      setEmptyFields([]);
      resetForm();

      dispatch({ type: 'CREATE_WORKOUT', payload: data });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
        setEmptyFields(err.response.data.emptyFields);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <div>
        {workouts &&
          workouts.map(wk => <WorkoutDetails key={wk._id} workout={wk} />)}
      </div>
      <div className='formWrapper'>
        <BaseForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          buttonText='Add workout'
          title='Add a new workout'
          emptyFields={emptyFields}
          error={error}
        />
      </div>
    </Wrapper>
  );
}

export default Home;
