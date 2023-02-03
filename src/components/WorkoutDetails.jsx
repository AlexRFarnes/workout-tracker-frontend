import axios from 'axios';
import styled from 'styled-components';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Wrapper = styled.div`
  background: var(--light-color);
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

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
  const { dipstach } = useWorkoutsContext();

  const handleDeleteWorkout = async () => {
    const choice = confirm('Are you sure to delete this item?');

    if (choice) {
      try {
        const { data, request } = await axios.delete(
          `http://localhost:4000/api/workouts/${workout._id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (request.status === 200) {
          dipstach({ type: 'DELETE_WORKOUT', payload: workout._id });
        }
      } catch (error) {
        console.log(error.response.data);
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
      <p>{workout.createdAt}</p>
      <div className='icons-container'>
        <span className='material-symbols-outlined edit'>edit</span>
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
