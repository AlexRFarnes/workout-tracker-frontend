import api from '../api';
import React, { useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { FormContainer } from '../styles/Container.styled';
import BaseForm from '../components/BaseForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

function Edit() {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { workouts, dispatch } = useWorkoutsContext();
  const { id } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const initialValues = workouts?.filter(wk => wk._id === id)[0] || null;

  const handleSubmit = async values => {
    if (!user) {
      return;
    }

    try {
      const { data } = await api.patch(`/workouts/${id}`, values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      });

      setEmptyFields([]);
      setError(null);

      dispatch({ type: 'UPDATE_WORKOUT', payload: { id, workout: values } });
      navigate('/');
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
        setEmptyFields(err.response.data.emptyFields);
      } else {
        console.log(err);
      }
    }
  };

  return initialValues ? (
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
  ) : (
    <Navigate to='/404' replace />
  );
}

export default Edit;
