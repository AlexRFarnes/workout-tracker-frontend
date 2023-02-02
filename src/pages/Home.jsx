import axios from 'axios';
import { useEffect, useState } from 'react';
import { GridLayout } from '../layouts/GridLayout';
import WorkoutDetails from '../components/WorkoutDetails';

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const { data, request } = await axios.get(
          'http://localhost:4000/api/workouts'
        );
        if (request.status === 200) {
          setWorkouts(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchWorkouts();
  }, []);

  return (
    <GridLayout>
      <div>
        {workouts &&
          workouts.map(wk => <WorkoutDetails key={wk._id} workout={wk} />)}
      </div>
      <p>Form</p>
    </GridLayout>
  );
}

export default Home;
