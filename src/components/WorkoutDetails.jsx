import api from '../api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

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

    span:last-child {
      margin-left: 0.5rem;
    }
  }

  span {
    cursor: pointer;
    background: var(--light-gray-color);
    padding: 6px;
    border-radius: 50%;
    color: var(--dark-color);
    transition: all 0.2s ease-in;
    transition-property: background, color;
  }

  span.delete:hover {
    background: var(--error);
    color: var(--light-gray-color);
  }

  span.edit:hover {
    background: var(--primary-color);
    color: var(--light-gray-color);
  }
`;

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const navigate = useNavigate();

  const handleEditWorkout = () => {
    navigate(`/${workout._id}/edit`);
  };

  const handleDeleteWorkout = async () => {
    const choice = confirm('Are you sure to delete this item?');

    if (choice) {
      try {
        const { data } = await api.delete(`/workouts/${workout._id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        dispatch({ type: 'DELETE_WORKOUT', payload: data });
      } catch (err) {
        console.log(err?.response.data);
        navigate('/404', { replace: true });
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
        <span
          onClick={handleEditWorkout}
          className='material-symbols-outlined edit'>
          edit
        </span>
        <span
          onClick={handleDeleteWorkout}
          className='material-symbols-outlined delete'>
          delete
        </span>
      </div>
    </Wrapper>
  );
}

export default WorkoutDetails;
