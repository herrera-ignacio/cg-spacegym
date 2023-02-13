import { useParams } from 'react-router-dom';
import useWorkout from '../../hooks/useWorkout';

function WorkoutDetailsPage() {
  const { workoutId } = useParams();
  const { loading, workout } = useWorkout(workoutId);

  return loading
    ? <div>Loading</div>
    : workout
      ? <p>{workout?.title}</p>
      : <p>Workout not found</p>
}

export default WorkoutDetailsPage;
