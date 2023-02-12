import api from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const Wrapper = styled.div`
  background: var(--light-color);
  border-radius: var(--border-radius);
  margin: 20px auto;
  padding: 20px;
  position: relative;
  box-shadow: var(--box-shadow);

  strong {
    margin-right: 4px;
  }

  h4 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
    color: var(--primary-color);
  }

  p {
    margin: 0;
    font-size: 0.9em;
    color: var(--dark-gray-color);
  }

  .icons-container {
    position: absolute;
    top: 20px;
    right: 20px;

    button:last-child {
      margin-left: 0.5rem;
    }
  }

  button {
    cursor: pointer;
    background: var(--light-gray-color);
    padding: 6px;
    border-radius: 50%;
    color: var(--dark-color);
    transition: all 0.2s ease-in;
    transition-property: background, color;
    border: none;
  }

  .delete:hover {
    background: var(--error);
    color: var(--light-gray-color);
  }

  .edit:hover {
    background: var(--primary-color);
    color: var(--light-gray-color);
  }

  button:disabled,
  .edit:disabled:hover,
  .delete:disabled:hover {
    background: var(--dark-gray-color);
    color: var(--light-gray-color);
    cursor: not-allowed;
  }
`;

function WorkoutDetails({ workout }) {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleEditWorkout = () => {
    if (!user) {
      return;
    }

    navigate(`/${workout._id}/edit`);
  };

  const handleDeleteWorkout = async () => {
    if (!user) {
      return;
    }

    const choice = confirm('Are you sure to delete this item?');

    if (choice) {
      try {
        setIsLoading(true);
        const { data } = await api.delete(`/workouts/${workout._id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        });

        dispatch({ type: 'DELETE_WORKOUT', payload: data });
        setIsLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          navigate('/404', { replace: true });
        } else {
          console.log(err);
        }
      }
    }
  };

  return (
    <Wrapper>
      <h4>{workout.title}</h4>
      <p>
        <strong>Load ({workout.loadUnits}):</strong> {workout.load}
      </p>
      <p>
        <strong>Series:</strong> {workout.series}
      </p>
      <p>
        <strong>Reps:</strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <div className='icons-container'>
        <button
          onClick={handleEditWorkout}
          className='material-symbols-outlined edit'
          disabled={isLoading}>
          edit
        </button>
        <button
          onClick={handleDeleteWorkout}
          className='material-symbols-outlined delete'
          disabled={isLoading}>
          delete
        </button>
      </div>
    </Wrapper>
  );
}

export default WorkoutDetails;
