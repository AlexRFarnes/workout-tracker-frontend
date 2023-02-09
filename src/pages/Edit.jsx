import api from '../api';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormContainer } from '../styles/Container.styled';
import BaseForm from '../components/BaseForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

function Edit() {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext();
  const { id } = useParams();

  const navigate = useNavigate();

  let initialValues = workouts.filter(wk => wk._id === id)[0];

  const handleSubmit = async values => {
    try {
      const { data } = await api.patch(`/workouts/${id}`, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setEmptyFields([]);
      setError(null);

      dispatch({ type: 'UPDATE_WORKOUT', payload: { id, workout: values } });
      navigate('/');
    } catch (err) {
      console.log(err?.response.data);
      setError(err?.response.data.error);
      setEmptyFields(err?.response.data.emptyFields);
    }
  };

  return (
    <FormContainer>
      <BaseForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        buttonText='Edit workout'
        title='Edit workout'
        emptyFields={emptyFields}
        error={error}
        backButton={true}
      />
    </FormContainer>
  );
}

export default Edit;
