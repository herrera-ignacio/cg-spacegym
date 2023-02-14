import workouts from 'workouts.json'
import type Workout from '../entities/Workout'

/**
 * Get available workouts.
 * This hook can be extended to accept query paramaters and fetch mechanisms.
 * @returns Workouts
 */
function useWorkouts (): Workout[] {
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchWorkouts();
  //   setLoading(false);
  // }, [])

  return workouts
}

export default useWorkouts
