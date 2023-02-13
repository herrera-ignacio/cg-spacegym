import { useState, useEffect } from "react";
import Workout from '../entities/Workout';
import useWorkouts from "./useWorkouts";

function useWorkout(workoutId: string = "") {
  const [loading, setLoading] = useState<boolean>(false);
  const [workout, setWorkout] = useState<Workout | undefined>(undefined);
  const workouts = useWorkouts();

  useEffect(() => {
    setLoading(true);
    setWorkout(workouts.find(w => w.id === workoutId)); 
    setLoading(false);
  }, [setLoading, setWorkout, workouts, workoutId])

  return { loading, workout }
}

export default useWorkout;
