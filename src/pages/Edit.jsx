import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BaseForm from '../components/BaseForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Wrapper = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 20px auto;
  background: var(--light-color);
  border-radius: var(--border-radius);
  padding: 20px;
  box-shadow: var(--box-shadow);
`;

function Edit() {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext();
  const { id } = useParams();

  const navigate = useNavigate();

  let initialValues = workouts.filter(wk => wk._id === id)[0];

  const handleSubmit = async values => {
    try {
      const { data, request } = await axios.patch(
        `http://localhost:4000/api/workouts/${id}`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (request.status === 200) {
        dispatch({ type: 'UPDATE_WORKOUT', payload: { id, workout: values } });
        setError(null);
        setEmptyFields([]);
        navigate('/');
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
      setEmptyFields(error.response.data.emptyFields);
    }
  };

  return (
    <Wrapper>
      <BaseForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        buttonText='Edit workout'
        title='Edit workout'
        emptyFields={emptyFields}
        error={error}
        backButton={true}
      />
    </Wrapper>
  );
}

export default Edit;
