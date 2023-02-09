import axios from 'axios';
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
  }, [dispatch]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
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
        setError(null);
        setEmptyFields([]);
        resetForm();
        console.log('New workout added', data);
        dispatch({ type: 'CREATE_WORKOUT', payload: data });
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
      setEmptyFields(error.response.data.emptyFields);
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
