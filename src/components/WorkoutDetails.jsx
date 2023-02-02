import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
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
    color: #555;
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
    background: #f1f1f1;
    padding: 6px;
    border-radius: 50%;
    color: #333;
    transition: all 0.2s ease-in;
    transition-property: background, color;
  }

  span.delete:hover {
    background: var(--error);
    color: #f1f1f1;
  }

  span.edit:hover {
    background: var(--primary-color);
    color: #f1f1f1;
  }
`;

function WorkoutDetails({ workout }) {
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
        <span className='material-symbols-outlined delete'>delete</span>
      </div>
    </Wrapper>
  );
}

export default WorkoutDetails;
